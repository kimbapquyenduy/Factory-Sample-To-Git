import Home from '@/app/(dashboard)/page';
import { render, screen, waitFor } from '@mock/utils';
import { serverMSW } from '@mock/server.msw.mock';
import { ACCOUNT_ENTITIES } from '@mock/fixtures';
import userEvent from '@testing-library/user-event';
import { mockCreateUserMutationTest } from '@mock/mock.types.generated';

const setup = () => render(<Home />);

//  Test Suite
describe('Main Page', () => {
  beforeAll(() => serverMSW.listen());

  afterEach(() => serverMSW.resetHandlers());

  afterAll(() => {
    serverMSW.close();
    jest.clearAllMocks();
  });

  // test case
  it('should render accounts', async () => {
    setup();

    await waitFor(() => {
      for (const item of ACCOUNT_ENTITIES) {
        screen.getByText(item.email);
        screen.getByText(item.userName);
      }
    });

    expect(
      serverMSW.logs.getOperation('users').map((item) => item.response.users)[0]
    ).toStrictEqual(ACCOUNT_ENTITIES);
  });

  it('should create account success', async () => {
    setup();
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /Click Me/i }));

    await waitFor(() => {
      screen.getByText(/Create account success/);
    });

    const variables = serverMSW.logs
      .getOperation('createUser')
      .map((item) => item.body.variables)[0].createUserInput;

    expect(variables).toHaveProperty('userName');
    expect(variables).toHaveProperty('email');
  });

  it('should create account error', async () => {
    setup();

    // mock response error
    serverMSW.use(
      mockCreateUserMutationTest((_, res, ctx) => {
        return res(
          ctx.errors([
            {
              message: 'Your account already exists',
            },
          ])
        );
      })
    );

    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /Click Me/i }));

    await waitFor(() => {
      screen.getByText(/Your account already exists/);
    });
  });
});
