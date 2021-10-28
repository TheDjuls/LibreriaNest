
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  nombre: string;

  @Column()
  ap_paterno: string;

  @Column()
  ap_materno: string;

  @Column()
  telefono: string;

  @Column()
  correo: string;

  @Column()
  password: string;

}