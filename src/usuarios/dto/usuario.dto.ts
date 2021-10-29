import { ApiProperty, ApiBody } from '@nestjs/swagger';

export class CreateUsuarioDTO {
    @ApiProperty()
    nombre:string
    @ApiProperty()
    ap_paterno:string
    @ApiProperty()
    ap_materno:string
    @ApiProperty()
    telefono:string
    @ApiProperty()
    correo:string
    @ApiProperty()
    password:string
}