import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibrosModule } from './libros/libros.module';
import { Libro } from './entities/libro.entity';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './entities/usuario.entity';
import { PrestamosModule } from './prestamos/prestamos.module';
import { Prestamos } from './entities/prestamo.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'Ciidigital1.',
    database: 'postgres',
    entities: [Libro,Usuario,Prestamos],
    synchronize: true,
  }), LibrosModule, UsuariosModule, PrestamosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
