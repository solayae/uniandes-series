"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    constructor() {
        this.categories = [
            { id: 1, name: "Acción" },
            { id: 2, name: "Drama" },
            { id: 3, name: "Romance" },
        ];
        this.currentId = 1;
    }
    getAllCategories() {
        return this.categories;
    }
    createCategory(categoryData) {
        const newCategoryId = this.generateUniqueId();
        categoryData.id = newCategoryId;
        this.categories.push(categoryData);
    }
    generateUniqueId() {
        const uniqueId = this.currentId;
        this.currentId++;
        return uniqueId;
    }
}
exports.Category = Category;
