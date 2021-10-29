import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { Prestamos } from 'src/entities/prestamo.entity';
import { CreatePrestamoDTO } from './dto/prestamo.dto';

@Injectable()
export class PrestamosService {

    constructor(
        @InjectRepository(Prestamos)
        private prestamoRepository: Repository<Prestamos>
    ) { }


    async savePrestamo(createPrestamos: CreatePrestamoDTO): Promise<InsertResult> {
        try {
            const respuesta = await this.prestamoRepository.insert({
                usuario:createPrestamos.usuario,
                libro:createPrestamos.libro
                }
            )
            return respuesta 
        } catch (error) {
            console.log(error)
        }
    }

    async deletePrestamo(usuario:number,libro:number):Promise<DeleteResult>{
        try {
            const respuesta = await this.prestamoRepository.delete({ usuario: usuario, libro: libro })
            return respuesta
        } catch (error) {
            console.log(error)
        }
    }
}
