import { Module } from '@nestjs/common';
import { UserUsecaseService } from './domain.payment.usecase.user.service';
import { ClientsModule } from '@nestjs/microservices';
import { clientsModuleOptions } from './user.grpc.setup';
import { I_USER_USECASE } from './domain.payment.usecase.user.interface';

@Module({
  imports: [ClientsModule.register(clientsModuleOptions)],
  controllers: [],
  providers: [
    {
      provide: I_USER_USECASE,
      useClass: UserUsecaseService,
    },
  ],
  exports: [I_USER_USECASE],
})
export class UserUsecaseModule { }
