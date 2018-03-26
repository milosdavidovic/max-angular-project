import { Recipe } from 'app/recipe/recipe.model';
import { Subscription } from 'rxjs/Subscription';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

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
