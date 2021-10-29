import { ApiProperty, ApiBody } from '@nestjs/swagger';

export class authDTO {
    @ApiProperty()
    correo:string
    @ApiProperty()
    password:string
}