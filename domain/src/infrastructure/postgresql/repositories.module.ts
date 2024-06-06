import { DynamicModule, Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostgresConnectionCredentialsOptions } from 'typeorm/driver/postgres/PostgresConnectionCredentialsOptions';
import entities from './entities';
import { SnakeNamingStrategy } from './datasource/naming.strategy';

import {
  I_USER_REPOSITORY,
  UserRepository,
} from './repositories/user.repository';

@Global()
@Module({})
export class RepositoriesModule {
  static forRoot(options: PostgresConnectionCredentialsOptions): DynamicModule {
    return {
      imports: [
        TypeOrmModule.forRootAsync({
          useFactory: () => ({
            type: 'postgres',
            database: options.database,
            host: options.host,
            port: options.port,
            username: options.username,
            password: options.password,
            synchronize: true, // not recommended on production
            logging: true,
            entities: entities,
            autoLoadEntities: false,
            namingStrategy: new SnakeNamingStrategy(),
            migrations: [__dirname + '/migrations/*{.ts,.js}'],
            migrationsRun: false,
            migrationsTransactionMode: 'each',
            migrationsTableName: 'migrations_table',
          }),
        }),
        TypeOrmModule.forFeature(entities),
      ],
      providers: [
        {
          provide: I_USER_REPOSITORY,
          useClass: UserRepository,
        }
      ],
      exports: [
        I_USER_REPOSITORY
      ],
      module: RepositoriesModule,
    };
  }
}
