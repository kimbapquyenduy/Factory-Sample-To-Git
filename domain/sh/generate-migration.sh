ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli -d ./src/infrastructure/postgresql/datasource migration:generate ./src/infrastructure/postgresql/migrations/$1