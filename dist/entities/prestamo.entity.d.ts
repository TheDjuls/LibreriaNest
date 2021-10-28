import { Libro } from './libro.entity';
import { Usuario } from './usuario.entity';
export declare class Prestamos {
    esActivo: boolean;
    usuario: Usuario;
    libro: Libro;
}
