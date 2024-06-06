import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from './domain.payment.service.user.interface';
import {
  CreateUserRequest,
  CreateUserResponse,
  GetUsersRequest,
  GetUsersResponse,
} from '@clv-factory/protobuf/dist/gRPC/generate/index.app.payment.user.service.v1';
import { UserUsecaseService } from 'src/domains/payment/usecases/user/domain.payment.usecase.user.service';
import { I_USER_USECASE } from 'src/domains/payment/usecases/user/domain.payment.usecase.user.interface';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(I_USER_USECASE)
    private userUsecaseService: UserUsecaseService,
  ) {
    //
  }

  async getUsers(payload: GetUsersRequest): Promise<GetUsersResponse> {
    return await this.userUsecaseService.getUsers(payload);
  }

  async createUser(payload: CreateUserRequest): Promise<CreateUserResponse> {
    return await this.userUsecaseService.createUser(payload);
  }
}
