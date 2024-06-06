import { Module } from '@nestjs/common';
import { RepositoriesModule } from './infrastructure/postgresql/repositories.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import rootConfiguration from './infrastructure/configuration';
import { UserModule } from './payment/user/payment.user.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [join(process.cwd(), 'env', `.env`)],
      load: [rootConfiguration],
    }),
    RepositoriesModule.forRoot({
      database: rootConfiguration().DB_NAME,
      host: rootConfiguration().DB_HOST,
      port: rootConfiguration().DB_PORT,
      username: rootConfiguration().DB_USERNAME,
      password: rootConfiguration().DB_PASSWORD,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
