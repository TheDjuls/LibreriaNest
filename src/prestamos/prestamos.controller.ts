import { Body, Controller, Delete, HttpException, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { CreatePrestamoDTO } from './dto/prestamo.dto';
import { PrestamosService } from './prestamos.service';

@Controller('prestamos')
export class PrestamosController {

    constructor(private __prestamoService:PrestamosService){

    }

    @Post("save")
    async createPrestamo(@Res() res, @Body() createPrestamoDTO:CreatePrestamoDTO){
        const prestamo = await this.__prestamoService.savePrestamo(createPrestamoDTO)
        if(!prestamo) throw new HttpException('Ha ocurrido un error',HttpStatus.FORBIDDEN)
        res.status(HttpStatus.OK).send(prestamo)
    }

    @Delete("/:usuario/:libro")
    async deletePrestamo(@Res() res,@Param() params){
        const prestamo = await this.__prestamoService.deletePrestamo(params.usuario,params.libro)
        if(!prestamo) throw new HttpException('Ha ocurrido un error',HttpStatus.FORBIDDEN)
        res.status(HttpStatus.OK).send(prestamo)
    }

}
