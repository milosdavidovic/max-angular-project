import { Component, OnInit } from '@angular/core';
import { Recipe } from 'app/recipe/recipe.model';
import { RecipeService } from '../recipe.service';
import { AuthService } from '../../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-wrapper',
  templateUrl: './recipes-wrapper.component.html',
  styleUrls: ['./recipes-wrapper.component.css']
})
export class RecipesWrapperComponent implements OnInit {
  recipeData: Recipe;

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/sign-in'], { relativeTo: this.activatedRoute });
    }
  }

}
