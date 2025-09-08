import type { EquipoProducto } from "../../interfaces/interfaces";
import { Desktop, Notebook, Servidor } from "./productos";

type TipoEquipo = "Notebook" | "Desktop" | "Servidor";

export class EquipoFactory {
  crearEquipo(tipo: TipoEquipo, nombre: string, ram: string, procesador: string): EquipoProducto {
    switch (tipo) {
      case "Notebook":
      return new Notebook(nombre, ram, procesador);
      case "Desktop":
      return new Desktop(nombre, ram, procesador);
      case "Servidor":
      return new Servidor(nombre, ram, procesador);
      default:
      // Si se amplían tipos, conviene usar un mapa de constructores
      throw new Error(`Tipo de equipo no soportado: ${tipo}`);
    }
  }
}