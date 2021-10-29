import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/entities/usuario.entity';
import { authDTO } from './dto/login.dto';

@Injectable()
export class UsuariosService {

    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository:Repository<Usuario>
    ){}

    async login(authDTO:authDTO): Promise<Usuario>{
        const usuario = await this.usuarioRepository.findOne({ where: { correo: authDTO.correo } });
        if(usuario.password== authDTO.password){
            //loguea
            return usuario
        }else{
            return
        }
    }

    async findById(id:number): Promise<Usuario>{
        const usuario = await this.usuarioRepository.findOne(id);
        return usuario
    }
}
