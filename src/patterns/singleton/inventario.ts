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