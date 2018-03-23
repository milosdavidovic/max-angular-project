import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Recipe } from "../recipe/recipe.model";
import { RecipeService } from "../recipe/recipe.service";
import 'rxjs/add/operator/map'

@Injectable()
export class DataStorageService {
    url = 'https://ng-recipe-book-bf184.firebaseio.com/';

    constructor(private http: Http, private recipeService: RecipeService) {

    }

    insertRecipes() {
        this.http.put(this.url + 'recipes.json', this.recipeService.getRecipes())
            .subscribe((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }

    fetchRecipes() {
        return this.http.get(this.url + 'recipes.json')
            .map((response: Response) => {
                const recipes: Recipe[] = response.json();
                for(let recipe of recipes) {
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

}