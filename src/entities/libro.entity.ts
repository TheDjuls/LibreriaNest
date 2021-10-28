
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Libro {
  @PrimaryGeneratedColumn()
  id_libro: number;

  @Column()
  nombre: string;

  @Column()
  sinopsis: string;

  @Column()
  portada: string;

  @Column()
  anio: number;

}