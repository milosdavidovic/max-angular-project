import { Recipe } from 'app/recipe/recipe.model';
import { Subscription } from 'rxjs/Subscription';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  recipes: Recipe[] = [];
  
  constructor(private recipeService: RecipeService) { }
  
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipeChanged
    .subscribe((newRecipes: Recipe[]) => {
      this.recipes = newRecipes;
    });
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
