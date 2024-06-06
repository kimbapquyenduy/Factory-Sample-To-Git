import { Module } from '@nestjs/common';
import { UseCasesModule } from '../usecases/usecases.module';
import { UserService } from './user/domain.payment.service.user.service';
import { I_USER_SERVICE } from './user/domain.payment.service.user.interface';
@Module({
  imports: [UseCasesModule],
  providers: [
    {
      provide: I_USER_SERVICE,
      useClass: UserService,
    },
  ],
  exports: [
    I_USER_SERVICE,
  ],
})
export class ServicesModule { }
