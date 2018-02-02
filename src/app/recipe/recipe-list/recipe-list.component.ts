import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe Name 1', 'Recipe description', 'https://octodex.github.com/images/heisencat.png'),
    new Recipe('Recipe Name 2', 'Recipe description', 'https://octodex.github.com/images/heisencat.png')];

  @Output() recipeClicked = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeClick(recipe: Recipe) {
    this.recipeClicked.emit(recipe);
  }

}
