import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from 'src/entities/driver.entities';
import { CreateDriverDto } from './dto/createDrivrDto';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(Driver) private readonly driverRepo: Repository<Driver>,
  ) {}
  async create(createDriverDto: CreateDriverDto) {
    //   throw new HttpException("JJFFJF",288)
      const driver = await this.driverRepo.create(createDriverDto);
      await this.driverRepo.save(driver);
    return driver;
  }

}
