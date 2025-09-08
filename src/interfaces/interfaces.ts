export type Estado = "disponible" | "en reparación" | "asignado" | "baja";

export interface RegistroEquipo {
  nombre: string;
  tipo: string; // portatil, desktop, servidor etc
  estado: Estado;
}

export interface IInventario {
  agregarEquipo(nombre: string, tipo: string, estado: Estado): void;
  listarEquipos(): RegistroEquipo[];
}

export interface EquipoProducto {
  detalles() : string;
}