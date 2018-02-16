import { ShoppingListService } from './../../shopping/shopping-list.service';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'app/recipe/recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.selectedRecipe = new Recipe('', '', '', []);
    let selectedId;
    this.activatedRoute.params.subscribe(
      (params) => {
        selectedId = params['index'];
        this.selectedRecipe = this.recipeService.getRecipesByIndex(selectedId);
      }
    );
  }

  toShoppingListClicked() {
    console.log('To shopping clicked.');
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }
}
