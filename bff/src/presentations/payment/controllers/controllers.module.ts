import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/domains/payment/services/services.module';
import { UserController } from './user/user.controller';
@Module({
  imports: [ServicesModule],
  controllers: [
    UserController,
  ],
  providers: [],
})
export class ControllersModule { }
