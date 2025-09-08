import { Equipo } from "./equipo";
import { Soporte } from "./soporte";

export function demoObserver() {
  const soporte = new Soporte();
  const equipo = new Equipo("Notebook HP", "Portatil", "disponible");

  equipo.agregarObservador(soporte);
  equipo.cambiarEstado("asignado");
}
