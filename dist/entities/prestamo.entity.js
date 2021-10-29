"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prestamos = void 0;
const typeorm_1 = require("typeorm");
const libro_entity_1 = require("./libro.entity");
const usuario_entity_1 = require("./usuario.entity");
let Prestamos = class Prestamos {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Prestamos.prototype, "id_prestamo", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Prestamos.prototype, "esActivo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => usuario_entity_1.Usuario, usuario => usuario.id_usuario, { primary: true }),
    __metadata("design:type", Number)
], Prestamos.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => libro_entity_1.Libro, libro => libro.id_libro, { primary: true }),
    __metadata("design:type", Number)
], Prestamos.prototype, "libro", void 0);
Prestamos = __decorate([
    (0, typeorm_1.Entity)()
], Prestamos);
exports.Prestamos = Prestamos;
//# sourceMappingURL=prestamo.entity.js.map