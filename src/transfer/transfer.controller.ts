import { Body, Controller, Get, Post } from "@nestjs/common";
import { TransferService } from "./transfer.service";
import { CreateTransferDto } from "./dto/createTransferDto";

@Controller("transfer")
export class TransferController{
    constructor(
        private readonly transferService: TransferService,
    ) { }

    // post request to create new transfer record
    @Post()
    create(@Body() createTransferDto: CreateTransferDto) {
        return this.transferService.create(createTransferDto);
    }

    // get all transfer records
    @Get()
    getAllTransfer() {
        return this.transferService.getAllTransfer();
    }

}