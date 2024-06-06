// Libs importing
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CreateUserInput, CreateUserRecipe, UserRecipe } from './user.recipe';
import { UserService } from 'src/domains/payment/services/user/domain.payment.service.user.service';
import { I_USER_SERVICE } from 'src/domains/payment/services/user/domain.payment.service.user.interface';

@Resolver(() => UserRecipe)
export class UserResolver {
  constructor(@Inject(I_USER_SERVICE) private userService: UserService) { }

  @Query(() => [UserRecipe], { name: 'users' })
  async user(): Promise<UserRecipe[]> {
    return await this.userService.getUsers(null).then((res) => res.users);
  }

  @Mutation(() => CreateUserRecipe, { name: 'createUser' })
  async createUser(
    @Args({ name: 'createUserInput' }) createUserInput: CreateUserInput,
  ): Promise<CreateUserRecipe> {
    return await this.userService.createUser(createUserInput);
  }
}
