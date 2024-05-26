import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from 'src/entities/driver.entity';
import { CreateDriverDto } from './dto/createDrivrDto';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(Driver) private readonly driverRepo: Repository<Driver>,
  ) { }

  async create(createDriverDto: CreateDriverDto) {
    const {phoneNumber , name } = createDriverDto;
    if(!phoneNumber || !name){
      throw new HttpException({
        success: false,
        message: "Phone number and name is required.",
        status:400
      }, 400)
    }
    const isDriverExist = await this.driverRepo.findOne({ where: { phoneNumber: createDriverDto?.phoneNumber } })
    if (isDriverExist) {
      throw new HttpException({
        success: false,
        message: "Phone number already exists.",
        status:400
      }, 400)
    }
    const driver = await this.driverRepo.create(createDriverDto);
    await this.driverRepo.save(driver);
    return {
      success:true,
      message:"Driver created successfully",
      status:201
    };
  }

  async findAll() {
    return {
      success:true,
      data:await this.driverRepo.find(),
      message:"Fetched drivers successfully",
      status:201
    };

  }

}
