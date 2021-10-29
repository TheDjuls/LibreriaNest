import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository,getConnection } from 'typeorm';
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
            const prestamos = await this.prestamoRepository.find({
                where: {
                    usuario: createPrestamos.usuario,
                    esActivo: true
                }
            })

            if (prestamos.length >= 3) {
                return
            } else {
                const respuesta = await this.prestamoRepository.insert({
                    usuario: createPrestamos.usuario,
                    libro: createPrestamos.libro
                }
                )
                return respuesta
            }

        } catch (error) {
            console.log(error)
        }
    }

    async deletePrestamo(usuario: number, libro: number): Promise<DeleteResult> {
        try {
            const respuesta = await this.prestamoRepository.update({ usuario: usuario, libro: libro },{esActivo:false})
            return respuesta
        } catch (error) {
            console.log(error)
        }
    }

    async getPrestamosXUsuario(usuario:number): Promise<Prestamos[]> {
        try {
            const prestamos = await this.prestamoRepository.query(`SELECT * FROM libro l,prestamos p WHERE p."libroIdLibro"=l.id_libro AND p."usuarioIdUsuario"=${usuario}`)
            return prestamos
        } catch (error) {
            console.log(error)
            return
        }
    }
}
