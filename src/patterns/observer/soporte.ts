import type { Observador } from "./observador";

export class Soporte implements Observador {
  private nombre: string;

  constructor(nombre = "Soporte") {
    this.nombre = nombre;
  }

  actualizar(ctx: { nombre: string; tipo: string; nuevoEstado: string }): void {
    console.log(
      `[Observer] ${this.nombre} notificado: ${ctx.nombre} (${ctx.tipo}) → ${ctx.nuevoEstado}.`
    );
  }
}
