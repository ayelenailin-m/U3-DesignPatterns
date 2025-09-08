import type { Estado } from "../../interfaces/interfaces";
export interface Observador {
  actualizar(contexto: {
    nombre: string;
    tipo: string;
    nuevoEstado: Estado;
  }) : void;
}
