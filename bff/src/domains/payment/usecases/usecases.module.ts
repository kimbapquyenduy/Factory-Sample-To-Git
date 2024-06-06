import { Module } from '@nestjs/common';
import { UserUsecaseModule } from './user/domain.payment.usecase.user.module';
@Module({
  imports: [
    UserUsecaseModule,
  ],
  exports: [
    UserUsecaseModule,
  ],
})
export class UseCasesModule { }
