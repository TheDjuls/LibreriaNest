import { Entity, Column, ManyToOne } from 'typeorm';
import { Libro } from './libro.entity';
import { Usuario } from './usuario.entity';

@Entity()
export class Prestamos {

  @Column()
  esActivo: boolean;

  @ManyToOne(type => Usuario, usuario => usuario.id_usuario, { primary: true })
  usuario: Usuario;


  @ManyToOne(type => Libro, libro => libro.id_libro, { primary: true })
  libro: Libro;

}