import { Controller, Get, Inject } from '@nestjs/common';
import { I_USER_SERVICE } from 'src/domains/payment/services/user/domain.payment.service.user.interface';
import { UserService } from 'src/domains/payment/services/user/domain.payment.service.user.service';

@Controller('user')
export class UserController {
  constructor(@Inject(I_USER_SERVICE) private userService: UserService) { }

  @Get('/v1')
  async getUser() {
    return await this.userService.getUsers(null);
  }
}
