import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity()
  export class Driver {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: false, nullable: false })
    name: string;
  
    @Column({ nullable: false, unique: true })
    phoneNumber: string;

    @Column()
    profilePhoto: string;
  }