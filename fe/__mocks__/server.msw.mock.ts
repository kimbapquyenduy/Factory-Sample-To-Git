import { find } from 'lodash';
import { SetupServer, setupServer } from 'msw/node';
import { handlers } from './handlers';

export const serverMSW = setupServer(...handlers) as SetupServer & {
  logs: typeof requestLogs;
};

// first
serverMSW.events.on('request:start', async (req) => {
  requestLogs.push({
    path: req.url.pathname,
    query: req.url.search,
    method: req.method,
    body: await req.json(),
    headers: { ...req.headers.raw },
    id: req.id,
  });
});

// second
serverMSW.events.on('response:mocked', async (req, reqId) => {
  const item = find(requestLogs.data, { id: reqId });
  if (item && req.body) {
    const temp = JSON.parse(req.body);
    const operationName = temp?.data ? Object.keys(temp.data)[0] : '';
    item.response = temp?.data || null;
    item.body.operationName = operationName;
  }
});

type TRequestLogEntity = {
  id: string;
  headers: Record<string, string>;
  path: string;
  query: string;
  method: string;
  body: {
    operationName: string;
    // eslint-disable-next-line
    variables: any;
  };
  // eslint-disable-next-line
  response?: any;
};

const requestLogs = {
  data: [] as TRequestLogEntity[],
  push(req: TRequestLogEntity) {
    this.data.push(req);
  },
  reset() {
    this.data = [];
  },
  getOperation(value: string): TRequestLogEntity[] {
    return this.data.filter((item) => item.body.operationName === value);
  },
};

serverMSW.logs = requestLogs;
