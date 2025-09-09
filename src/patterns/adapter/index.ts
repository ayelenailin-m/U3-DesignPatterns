import { InventarioViejo } from "./inventarioViejo";
import { AdaptadorInventario } from "./adaptadorInventario";

export function demoAdapter() {
  const inventarioViejo = new InventarioViejo();
  const adaptador = new AdaptadorInventario(inventarioViejo);

  adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
  adaptador.agregarEquipo("MacBook Pro", "Portatil", "en reparación");
  console.log("[Adapter] Equipos:", adaptador.listarEquipos());
}
