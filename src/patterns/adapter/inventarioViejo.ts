// Un sistema legado que guarda items con una API distinta
export class InventarioViejo {
  private items: Array<{ titulo: string; categoria: string; estado: string }> =
    [];

  agregarItem(titulo: string, categoria: string, estado: string) {
    this.items.push({ titulo, categoria, estado });
  }

  obtenerTodo() {
    return [...this.items];
  }
}
