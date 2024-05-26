import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vehicle } from "./vehicle.entity";
import { Driver } from "./driver.entity";

@Entity()
export class Transfer {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Vehicle)
    vehicle: Vehicle;
  
    @ManyToOne(() => Driver)
    fromDriver: Driver;
  
    @ManyToOne(() => Driver)
    toDriver: Driver;
  
    @Column()
    transferDate: Date;
  }