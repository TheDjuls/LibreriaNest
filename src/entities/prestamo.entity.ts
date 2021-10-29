import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Libro } from './libro.entity';
import { Usuario } from './usuario.entity';

@Entity()
export class Prestamos {

  @PrimaryGeneratedColumn()
  id_prestamo:number

  @Column({default:true})
  esActivo: boolean;

  @ManyToOne(type => Usuario, usuario => usuario.id_usuario, { primary: true })
  usuario: number;

  @ManyToOne(type => Libro, libro => libro.id_libro, { primary: true })
  libro: number;

}