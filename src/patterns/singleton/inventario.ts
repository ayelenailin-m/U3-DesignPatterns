import type { IInventario, RegistroEquipo, Estado } from "../../interfaces/interfaces";

export class Inventario implements IInventario {
  private static instancia: Inventario | null = null;
  private equipos: RegistroEquipo[] = [];

  private constructor(){}

  static obtenerInstancia(): Inventario {
    if (!Inventario.instancia) {
      Inventario.instancia = new Inventario();

    }
    return Inventario.instancia;
  }

  agregarEquipo(nombre: string, tipo: string, estado: Estado) :void {
    this.equipos.push({nombre, tipo, estado});

  }

  listarEquipos(): RegistroEquipo[] {
    return [...this.equipos];
  }
}