import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { authDTO } from './dto/login.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {

    constructor(private __usuarioService:UsuariosService){

    }

    @Post("auth")
    async authUsuario(@Res() res, @Body() auth:authDTO){
        const usuario = await this.__usuarioService.login(auth)
        if(!usuario) throw new HttpException('Ha ocurrido un error',HttpStatus.FORBIDDEN)
        res.status(HttpStatus.OK).send(usuario)
    }

    @Get(':id')
    async getById(@Res() res,@Param() params){
        const usuario = await this.__usuarioService.findById(params.id)
        if(!usuario) throw new HttpException('Ha ocurrido un error',HttpStatus.FORBIDDEN)
        res.status(HttpStatus.OK).send(usuario)
    }
}
