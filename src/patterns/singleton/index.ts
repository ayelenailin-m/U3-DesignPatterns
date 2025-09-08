import { Inventario } from "./inventario";

export function demoSingleton() {
  const inventario = Inventario.obtenerInstancia();

  inventario.agregarEquipo("Notebook HP", "Portatil", "disponible");
  inventario.agregarEquipo("PC Oficina", "Desktop", "asignado");
  inventario.agregarEquipo("Servidor", "Servidor", "baja");
  inventario.agregarEquipo("MacBook Pro", "Portatil", "en reparación");

  console.log("[Singleton] Equipos: ", inventario.listarEquipos());
  
}