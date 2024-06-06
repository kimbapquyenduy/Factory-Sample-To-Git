import { IsDate, IsEmail, IsNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import * as dayjs from 'dayjs';
import { UserEntity } from 'src/infrastructure/postgresql/entities';
import { OmitType } from '@nestjs/swagger';

export class UserDTO extends OmitType(UserEntity, ['id']) {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsDate()
  @Transform(({ value }) => dayjs(value, 'MM-DD-YYYY').toDate())
  dob: Date;

  @IsNumber()
  age = 16;
}

export class UserResponse extends UserDTO {
  @IsString()
  id: string;
}
