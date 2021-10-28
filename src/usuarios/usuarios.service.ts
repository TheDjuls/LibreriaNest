import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/entities/usuario.entity';
import { authDTO } from './dto/auth.dto';

@Injectable()
export class UsuariosService {

    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository:Repository<Usuario>
    ){}

    async findOne(authDTO:authDTO): Promise<Usuario>{
        const usuario = await this.usuarioRepository.findOne({ where: { correo: authDTO.correo } });
        if(usuario.password== authDTO.password){
            //loguea
            return usuario
        }else{
            return
        }
    }
}
