import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from 'src/entities/libro.entity';

@Injectable()
export class LibrosService {

    constructor(
        @InjectRepository(Libro)
        private libroRepository:Repository<Libro>
    ){}

    async findAll(): Promise<Libro[]> {
        const libros = await this.libroRepository.find();
        return libros
    }

    async findOne(id:number): Promise<Libro>{
        const libro = await this.libroRepository.findOne(id)
        return libro
    }
}
