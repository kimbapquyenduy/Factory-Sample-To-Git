import { Inject, Injectable } from '@nestjs/common';
import {
  CreateUserRequest,
  GetUsersRequest,
  USER_SERVICE_NAME,
  UserServiceClient,
} from '@clv-factory/protobuf/dist/gRPC/generate/index.app.payment.user.service.v1';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { IUserUseCase } from './domain.payment.usecase.user.interface';

@Injectable()
export class UserUsecaseService implements IUserUseCase {
  private invoiceServiceClient: UserServiceClient;

  constructor(
    @Inject(USER_SERVICE_NAME)
    private client: ClientGrpc,
  ) {
    this.invoiceServiceClient =
      this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }

  async getUsers(payload: GetUsersRequest) {
    return await lastValueFrom(this.invoiceServiceClient.getUsers(payload));
  }

  async createUser(request: CreateUserRequest): Promise<{ id: string }> {
    return await lastValueFrom(this.invoiceServiceClient.createUser(request));
  }
}
