import { create } from 'zustand';

export const headers = [
  { id: 'no', name: 'NO.' },
  { id: 'requestNo', name: 'REQUEST NO' },
  { id: 'requestDt', name: 'REQUEST DATE' },
  { id: 'plannedShipDt', name: 'PLANNED SHIP DATE' },
  { id: 'obNo', name: 'OUTBOUND NO' },
  { id: 'obDt', name: 'OUTBOUND DATE' },
  { id: 'stockQty', name: 'STOCK QTY' },
  { id: 'requestQty', name: 'REQUEST QTY' },
  { id: 'obQty', name: 'OUTBOUND QTY' },
  { id: 'status', name: 'STATUS' },
];

export const obStatusOption = {
  new: {
    id: 'NEW',
    value: 'NEW',
  },
  cancelled: {
    id: 'CANCELLED',
    value: 'CANCELLED',
  },
  done: {
    id: 'DONE',
    value: 'DONE',
  },
  all: {
    id: null,
    value: 'ALL',
  },
};

export type ObItem = {
  coCd: string;
  requestNo: string;
  requestDt: string;
  requestObDt: string;
  obNo: string;
  obDt: string;
  stockQty: number;
  requestQty: number;
  obQty: number;
  status: string;
  remark: string;
};

export type SearchParams = {
  requestFmDate: string | null;
  requestToDate: string | null;
  shipFmDate: string | null;
  shipToDate: string | null;
  obNo: string | null;
  requestNo: string | null;
  status: string | null;
};

type ObStore = {
  datasource: ObItem[] | undefined;
  searchParams: SearchParams;
  selectedRow: ObItem[];
};

type ObActionStore = {
  updateDatasource: (newData: ObItem[]) => void;
  updateSearchParams: (newValue: SearchParams) => void;
  setSelectedRow: (newValue: ObItem[]) => void;
};

export const useObStore = create<ObStore & ObActionStore>((set) => ({
  datasource: [],
  searchParams: {
    requestFmDate: null,
    requestToDate: null,
    shipFmDate: null,
    shipToDate: null,
    requestNo: null,
    obNo: null,
    status: obStatusOption.all.id,
  },
  selectedRow: [],
  updateSearchParams: (newData) => set({ searchParams: newData }),
  updateDatasource: (newData) => set({ datasource: newData }),
  setSelectedRow: (newData) => set({ selectedRow: newData }),
}));
