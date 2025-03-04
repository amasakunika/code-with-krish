import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';

@Entity()
export class Dispatch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehicle_number: string;

  @Column()
  city: string;

}
