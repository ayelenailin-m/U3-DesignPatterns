import type { Estado } from "../../interfaces/interfaces";
import type { Observador } from "./observador";

export class Equipo {
  private observadores: Observador[] = [];
  public nombre: string;
  public tipo: string;
  private estado: Estado;
  constructor(nombre: string, tipo: string, estado: Estado) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.estado = estado;
  }

  agregarObservador(obs: Observador): void {
    if (!this.observadores.includes(obs)) this.observadores.push(obs);
  }

  eliminarObservador(obs: Observador): void {
    this.observadores = this.observadores.filter((o) => o !== obs);
  }

  obtenerEstado(): Estado {
    return this.estado;
  }

  cambiarEstado(nuevo: Estado): void {
    this.estado = nuevo;
    this.notificar();
  }

  private notificar() {
    for (const obs of this.observadores) {
      obs.actualizar({
        nombre: this.nombre,
        tipo: this.tipo,
        nuevoEstado: this.estado,
      });
    }
  }
}
