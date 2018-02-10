import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'app/recipe/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { 

  }

  ngOnInit() {
    this.selectedRecipe = new Recipe('', '', '', []);
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => { this.selectedRecipe = recipe; }
    );
  }


}
