import { ApiProperty, ApiBody } from '@nestjs/swagger';

export class CreatePrestamoDTO {
    @ApiProperty()
    usuario:number
    @ApiProperty()
    libro:number
    @ApiProperty()
    esActivo:boolean
}