import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateDriverDto } from "./dto/createDrivrDto";
import { DriverService } from "./driver.service";


@Controller("driver")
export class DriverController {
    constructor(
        private readonly driverService: DriverService,
    ) { }

    @Post()
    create(@Body() createDriverDto: CreateDriverDto) {
        return this.driverService.create(createDriverDto);
    }

    @Get("getAllDrivers")
    findAll(){
        return this.driverService.findAll()
    }
}