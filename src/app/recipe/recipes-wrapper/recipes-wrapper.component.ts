import { Component, OnInit } from '@angular/core';
import { Recipe } from 'app/recipe/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-wrapper',
  templateUrl: './recipes-wrapper.component.html',
  styleUrls: ['./recipes-wrapper.component.css']
})
export class RecipesWrapperComponent implements OnInit {
  recipeData: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
