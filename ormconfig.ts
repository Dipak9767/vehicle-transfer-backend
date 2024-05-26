import { Driver } from 'src/entities/driver.entity';
import { Transfer } from 'src/entities/transfer.entity';
import { Vehicle } from 'src/entities/vehicle.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'testDB',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: [Driver,Vehicle,Transfer],
  synchronize: true,
};

export default config;