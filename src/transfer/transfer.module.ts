import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transfer } from 'src/entities/transfer.entity';
import { TransferController } from './transfer.controller';
import { TransferService } from './transfer.service';
import { DriverService } from 'src/driver/driver.service';
import { Driver } from 'src/entities/driver.entity';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { Vehicle } from 'src/entities/vehicle.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Transfer,Driver,Vehicle])],
    controllers: [TransferController],
    providers: [TransferService,DriverService,VehicleService],
  })
  export class TransferModule {}
