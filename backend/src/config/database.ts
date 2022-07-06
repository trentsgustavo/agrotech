import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import entities from './entities';

const config = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'agrotech',
  entities: entities,
  migrations: [process.cwd() + 'src/database/migrations/*{.ts,.js}'],
  migrationsRun: false,
  synchronize: false,
};

export const typeorm = config as TypeOrmModuleOptions;

export default new DataSource(config as DataSourceOptions);
