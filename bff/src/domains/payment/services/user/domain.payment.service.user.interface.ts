import { app } from '@clv-factory/protobuf';

export const I_USER_SERVICE = 'I_USER_SERVICE';

export interface IUserService {
  createUser(
    payload: app.payment.user.service.v1.CreateUserRequest,
  ): Promise<app.payment.user.service.v1.CreateUserResponse>;

  getUsers(
    payload: app.payment.user.service.v1.GetUsersRequest,
  ): Promise<app.payment.user.service.v1.GetUsersResponse>;
}
