import { IsString } from "class-validator";

export class CreateVehicleDto{
    @IsString()
    vehicleNumber: string;

    @IsString()
    vehicleType: string;
  
    @IsString()
    insuranceCertificate: string;
  
    @IsString()
    pucCertificate: string;
}