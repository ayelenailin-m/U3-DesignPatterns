import { EquipoFactory } from "./equipoFactory";


export function demoFactory() {
  const factory = new EquipoFactory();
  const nb = factory.crearEquipo("Notebook", "HP Probook", "32GB", "i7");
  const nb2 = factory.crearEquipo("Notebook", "MacBook", "32GB", "i7");
  const pc = factory.crearEquipo("Desktop", "Oficina A", "16GB", "i5");
  const srv = factory.crearEquipo("Servidor", "Dell R740", "64GB", "Xeon Gold");


  console.log("[Factory]", nb.detalles());
  console.log("[Factory]", nb2.detalles());
  console.log("[Factory]", pc.detalles());
  console.log("[Factory]", srv.detalles());
}