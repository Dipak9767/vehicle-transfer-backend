import { Body, Controller, Get, Post } from "@nestjs/common";
import { TransferService } from "./transfer.service";
import { CreateTransferDto } from "./dto/createTransferDto";

@Controller("transfer")
export class TransferController{
    constructor(
        private readonly transferService: TransferService,
    ) { }

    @Post()
    create(@Body() createTransferDto: CreateTransferDto) {
        return this.transferService.create(createTransferDto);
    }

    @Get()
    getAllTransfer() {
        return this.transferService.getAllTransfer();
    }

}