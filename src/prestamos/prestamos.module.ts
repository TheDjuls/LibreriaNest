import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrestamosController } from './prestamos.controller';
import { PrestamosService } from './prestamos.service';
import { Prestamos } from 'src/entities/prestamo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prestamos])],
  controllers: [PrestamosController],
  providers: [PrestamosService]
})
export class PrestamosModule {}
