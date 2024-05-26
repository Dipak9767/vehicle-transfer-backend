import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from 'src/entities/vehicle.entity';
import { CreateVehicleDto } from './dto/createVehicleDto';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle) private readonly vehicleRepo: Repository<Vehicle>,
  ) { }

  async create(createVehicleDto: CreateVehicleDto) {
    const {vehicleNumber , vehicleType , pucCertificate , insuranceCertificate } = createVehicleDto;
    if(!vehicleNumber || !vehicleType || !pucCertificate  || !insuranceCertificate){
      throw new HttpException({
        success: false,
        message: "Invalid data.",
        status:400
      }, 400)
    }
    const isDriverExist = await this.vehicleRepo.findOne({ where: { vehicleNumber: createVehicleDto?.vehicleNumber } })
    if (isDriverExist) {
      throw new HttpException({
        success: false,
        message: "Vehicle already exists.",
        status:400
      }, 400)
    }
    const driver = await this.vehicleRepo.create(createVehicleDto);
    await this.vehicleRepo.save(driver);
    return {
      success:true,
      message:"Vehicle created successfully",
      status:201
    };
  }

  async findAll() {
    return {
      success:true,
      data:await this.vehicleRepo.find(),
      message:"fetched Vehicles successfully",
      status:200
    };

  }

}
