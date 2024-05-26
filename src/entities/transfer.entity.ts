import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vehicle } from "./vehicle.entity";
import { Driver } from "./driver.entity";

@Entity()
export class Transfer {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Vehicle)
    @JoinColumn({ name: 'vehicle_number' })
    vehicle: Vehicle;
  
    @ManyToOne(() => Driver)
    @JoinColumn({ name: 'from_driver_id' })
    fromDriver: Driver;
  
    @ManyToOne(() => Driver)
    @JoinColumn({ name: 'to_driver_id' })
    toDriver: Driver;
  
    @Column()
    transferDate: Date;
  }