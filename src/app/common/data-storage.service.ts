import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Recipe } from "../recipe/recipe.model";
import { RecipeService } from "../recipe/recipe.service";
import 'rxjs/add/operator/map'
import { ShoppingListService } from "../shopping/shopping-list.service";
import { Ingredient } from "./ingredient.model";

@Injectable()
export class DataStorageService {
    url = 'https://ng-recipe-book-bf184.firebaseio.com/';

    constructor(private http: Http,
        private recipeService: RecipeService,
        private shoppingService: ShoppingListService) {
           this.getRecipes();
           this.getShoppingList();
    }

    setRecipes() {
        this.http.put(this.url + 'recipes.json', this.recipeService.getRecipes())
            .subscribe((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }

    getRecipes() {
        return this.http.get(this.url + 'recipes.json')
            .map((response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                    if (!recipe.ingredients) {
                        recipe.ingredients = [];
                    }
                }
                return recipes;
            })
            .subscribe((recipes) => {
                this.recipeService.writeRecipes(recipes)
            }, (error) => {

            });
    }

    setShoppingList() {
        this.http.put(this.url + 'shopping-list.json', this.shoppingService.getIngredients())
            .subscribe((response: Response) => {
                console.log(response);
            }, (error: Error) => {
                console.log(error);
            });
    }

    getShoppingList() {
        return this.http.get(this.url + 'shopping-list.json')
            .subscribe((ingeredients) => {
                this.shoppingService.addIngredients(ingeredients.json())
            }, (error) => {

            });
    }
}