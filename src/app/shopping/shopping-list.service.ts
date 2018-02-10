import { Ingredient } from './../common/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingrediantsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Tomato', 4),
        new Ingredient('Potato', 2)
      ];

      public getIngredients() {
          return this.ingredients.slice();
      }

      public addIngredient(ingredient: Ingredient) {
          this.ingredients.push(ingredient);
          this.ingrediantsChanged.emit(this.ingredients.slice());
      }

      public addIngredients(ingredients: Ingredient[]) {
        this.ingredients = [];
        ingredients.forEach(element => {
            this.ingredients.push(element);
        });  
        this.ingrediantsChanged.emit(this.ingredients.slice());
      }
}