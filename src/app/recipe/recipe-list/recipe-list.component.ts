import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe Name 1', 'Recipe description', 'https://octodex.github.com/images/heisencat.png'),
    new Recipe('Recipe Name 2', 'Recipe description', 'https://octodex.github.com/images/heisencat.png')];

  constructor() { }

  ngOnInit() {
  }

}
