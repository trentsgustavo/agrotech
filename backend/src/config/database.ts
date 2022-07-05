import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

console.log('config ->>', process.cwd());

const config = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'agrotech',
  entities: [__dirname + '/modules/**/entities/*.entity{.ts,.js}'],
  migrations: [process.cwd() + 'src/database/migrations/*{.ts,.js}'],
  migrationsRun: false,
  synchronize: false,
};

export const typeorm = config as TypeOrmModuleOptions;

export default new DataSource(config as DataSourceOptions);
