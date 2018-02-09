import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('Recipe Name 1', 'Recipe description', 'https://octodex.github.com/images/heisencat.png'),
        new Recipe('Recipe Name 2', 'Recipe description', 'https://octodex.github.com/images/heisencat.png')];
    
    recipeSelected = new EventEmitter<Recipe>();
    
    getRecipes() {
        return this.recipes.slice(); // slice returns copy of the array, not the reference
    }
}