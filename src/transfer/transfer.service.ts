import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transfer } from "src/entities/transfer.entity";
import { Repository } from "typeorm";
import { CreateTransferDto } from "./dto/createTransferDto";
import { Driver } from "src/entities/driver.entity";
import { Vehicle } from "src/entities/vehicle.entity";

@Injectable()
export class TransferService {
    constructor(
        @InjectRepository(Transfer)
        private readonly transferRepo: Repository<Transfer>,
        @InjectRepository(Driver)
        private driverRepo: Repository<Driver>,
        @InjectRepository(Vehicle)
        private vehicleRepo: Repository<Vehicle>,
    ) { }

    async create(createTransferDto: CreateTransferDto) {

        const { vehicleNumber, fromDriver, toDriver } = createTransferDto; // destructuring keys

        // validating vehicle number
        if (!vehicleNumber) {
            throw new HttpException({
                success: false,
                message: "Vehicle number is required.",
                status: 400
            }, 400)
        }

        // validating from driver
        if (!fromDriver) {
            throw new HttpException({
                success: false,
                message: "from driver is required.",
                status: 400
            }, 400)
        }

        // validating to driver
        if (!toDriver) {
            throw new HttpException({
                success: false,
                message: "to Driver is required.",
                status: 400
            }, 400)
        }
        const vehicle = await this.vehicleRepo.findOne({ where: { vehicleNumber: createTransferDto?.vehicleNumber } })
        const getFromDriver = await this.driverRepo.findOne({ where: { id: createTransferDto?.fromDriver } })
        const getToDriver = await this.driverRepo.findOne({ where: { id: createTransferDto?.toDriver } })

        // if vehicle does not exists
        if (!vehicle) {
            throw new HttpException({
                success: false,
                message: "vehicle not found",
                status: 400
            }, 400)
        }

        // if from driver does not exists
        if (!getFromDriver) {
            throw new HttpException({
                success: false,
                message: "From driver not found",
                status: 400
            }, 400)
        }

        // if to driver does not exists
        if (!toDriver) {
            throw new HttpException({
                success: false,
                message: "To driver not found",
                status: 400
            }, 400)
        }

        // creating transfer record
        const transfer = await this.transferRepo.create({
            vehicle: vehicle,
            fromDriver: getFromDriver,
            toDriver: getToDriver,
            transferDate: new Date()
        });

        // saving and returning record
        const transferData = await this.transferRepo.save(transfer);
        return {
            success: true,
            data: transferData,
            message: "Driver created successfully",
            status: 201
        }
    }

    // get all transfer Records
    async getAllTransfer() {
        return await this.transferRepo.find({ relations: ['vehicle', 'fromDriver', 'toDriver'] });
    }
}