import { Module } from '@nestjs/common';
import { USER_TOKEN_SERVICE, UserService } from './payment.user.service';
import { UserController } from './payment.user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    {
      provide: USER_TOKEN_SERVICE,
      useClass: UserService,
    },
  ],
  exports: [USER_TOKEN_SERVICE],
})
export class UserModule { }

