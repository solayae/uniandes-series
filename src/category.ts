export class Category {
  private categories: CategoryInfo[];
  private currentId: number;


  constructor() {
    this.categories = [
      { id: 1, name: "Acción" },
      { id: 2, name: "Drama" },
      { id: 3, name: "Romance" },
    ];
    this.currentId = 1; // Inicializar el contador en 1

  }

  getAllCategories(): CategoryInfo[] {
    return this.categories;
  }

  createCategory(categoryData: CategoryInfo): void {
    const newCategoryId = this.generateUniqueId();
    categoryData.id = newCategoryId;
    this.categories.push(categoryData);
  }

  private generateUniqueId(): number {
    const uniqueId = this.currentId;
    this.currentId++; // Incrementar el contador para el siguiente ID
    return uniqueId;
  }
}

interface CategoryInfo {
  id: number;
  name: string;
}

export { CategoryInfo };
