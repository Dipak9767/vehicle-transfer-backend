import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateDriverDto } from "./dto/createDrivrDto";
import { DriverService } from "./driver.service";


@Controller("driver")
export class DriverController {
    constructor(
        private readonly driverService: DriverService,
    ) { }

    // post request to create driver
    @Post()
    create(@Body() createDriverDto: CreateDriverDto) {
        return this.driverService.create(createDriverDto);
    }

    // get request to fetch all drivers
    @Get("getAllDrivers")
    findAll(){
        return this.driverService.findAll()
    }
}