import { Body, Controller, Get, Post } from "@nestjs/common";
import { VehicleService } from "./vehicle.service";
import { CreateVehicleDto } from "./dto/createVehicleDto";


@Controller("vehicle")
export class VehicleController {
    constructor(
        private readonly vehicleService: VehicleService,
    ) { }

    @Post()
    create(@Body() createVehicleDto: CreateVehicleDto) {
        return this.vehicleService.create(createVehicleDto);
    }

    @Get("getAllVehicles")
    findAll(){
        return this.vehicleService.findAll()
    }
}