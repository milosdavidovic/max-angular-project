import { Recipe } from 'app/recipe/recipe.model';
import { Component, OnInit } from '@angular/core';

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
