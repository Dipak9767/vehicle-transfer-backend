import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vehicle{
    @PrimaryColumn({nullable:false,unique:true})
    vehicleNumber: string;
  
    @Column()
    vehicleType: string;
  
    @Column({ nullable: true })
    pucCertificate: string;
  
    @Column({ nullable: true })
    insuranceCertificate: string;
}