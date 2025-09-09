import type {
  Estado,
  RegistroEquipo,
  IInventario,
} from "../../interfaces/interfaces";
import { InventarioViejo } from "./inventarioViejo";

export class AdaptadorInventario implements IInventario {
  private legado: InventarioViejo;
  constructor(legado: InventarioViejo) {
    this.legado = legado;
  }

  agregarEquipo(nombre: string, tipo: string, estado: Estado): void {
    // Adapta nombres de propiedades y mantiene compatibilidad
    this.legado.agregarItem(nombre, tipo, estado);
  }

  listarEquipos(): RegistroEquipo[] {
    return this.legado.obtenerTodo().map((item) => ({
      nombre: item.titulo,
      tipo: item.categoria,
      estado: item.estado as Estado,
    }));
  }
}
