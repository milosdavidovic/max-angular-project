import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../common/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    recipes: Recipe[] = [];

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private http: Http) {

    }

    getRecipes() {
        return this.recipes.slice(); // slice returns copy of the array, not the reference
    }

    getRecipesByIndex(index: number) {
        return this.recipes.slice()[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    writeRecipes(newRecipes: Recipe[]) {
        this.recipes = newRecipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }

}