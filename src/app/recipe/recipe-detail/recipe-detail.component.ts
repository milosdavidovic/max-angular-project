import { ShoppingListService } from './../../shopping/shopping-list.service';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'app/recipe/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  selectedId;

  constructor(private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.selectedRecipe = new Recipe('', '', '', []);
    this.activatedRoute.params.subscribe(
      (params) => {
        this.selectedId = params['index'];
        this.selectedRecipe = this.recipeService.getRecipesByIndex(this.selectedId);
      }
    );
  }

  toShoppingListClicked() {
    console.log('To shopping clicked.');
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.selectedId);
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

}
