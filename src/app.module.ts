import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverModule } from './driver/driver.module';
import config from 'ormconfig';

@Module({
  imports: [ TypeOrmModule.forRoot(config), DriverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
