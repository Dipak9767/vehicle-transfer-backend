import { IsString } from "class-validator";

export class CreateTransferDto{
    @IsString()
    vehicleNumber:string

    @IsString()
    fromDriver:number

    @IsString()
    toDriver:number

    @IsString()
    transferDate:string
}

