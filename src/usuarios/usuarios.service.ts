import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { Usuario } from 'src/entities/usuario.entity';
import { authDTO } from './dto/login.dto';
import { CreateUsuarioDTO } from './dto/usuario.dto';

@Injectable()
export class UsuariosService {

    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>
    ) { }

    async login(authDTO: authDTO): Promise<Usuario> {
        const usuario = await this.usuarioRepository.findOne({ where: { correo: authDTO.correo } });
        console.log(usuario)
        if (usuario.password == authDTO.password) {
            //loguea
            return usuario
        } else {
            return
        }
    }

    async findById(id: number): Promise<Usuario> {
        const usuario = await this.usuarioRepository.findOne(id);
        return usuario
    }

    async saveUsuario(createUsuarioDTO: CreateUsuarioDTO): Promise<InsertResult> {
        try {

            const usuario = await this.usuarioRepository.findOne({ where:{ correo: createUsuarioDTO.correo }});
            if(!usuario){
                const respuesta = await this.usuarioRepository.insert(createUsuarioDTO)
                return respuesta
            }else{
                return
            }
    } catch(error) {
        console.log(error)
    }
}

}
