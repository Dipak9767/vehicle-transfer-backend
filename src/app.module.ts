import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverModule } from './driver/driver.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { TransferModule } from './transfer/transfer.module';
import config from 'ormconfig';

@Module({
  imports: [ TypeOrmModule.forRoot(config), DriverModule, VehicleModule, TransferModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
