import { Controller, Get, HttpException, HttpStatus, Param, Res } from '@nestjs/common';
import { LibrosService } from './libros.service';

@Controller('libros')
export class LibrosController {

    constructor(private __librosService:LibrosService){

    }


    @Get('/All')
    async getAll(@Res() res){
        const libros = await this.__librosService.findAll()
        if(!libros) throw new HttpException('Ha ocurrido un error',HttpStatus.FORBIDDEN)
        res.status(HttpStatus.OK).send(libros)
    }

    @Get(':id')
    async getById(@Res() res,@Param() params){
        const libros = await this.__librosService.findOne(params.id)
        if(!libros) throw new HttpException('Ha ocurrido un error',HttpStatus.FORBIDDEN)
        res.status(HttpStatus.OK).send(libros)
    }
}
