import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../common/ingredient.model';

export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('Weiner Schnitzel', 
            'A schnitzel is meat, usually thinned by pounding with a meat tenderizer, that is fried in some kind of oil or fat.', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/220px-Wiener-Schnitzel02.jpg', 
            [new Ingredient('Beef', 1), new Ingredient('Eggs', 2),  new Ingredient('Flower', 1)]),
        new Recipe('Hamburger', 
            'A hamburger, beefburger or burger is a sandwich consisting of one or more cooked patties of ground meat,' +
            'usually beef, placed inside a sliced bread roll or bun. ', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/250px-Hamburger_%28black_bg%29.jpg', 
            [new Ingredient('Pork', 1), new Ingredient('Potato', 1),  new Ingredient('Bun', 1)])];
    
    recipeSelected = new EventEmitter<Recipe>();
    
    getRecipes() {
        return this.recipes.slice(); // slice returns copy of the array, not the reference
    }

    getRecipesByIndex(index: number) {
        return this.recipes.slice()[index]; 
    }
}