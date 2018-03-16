import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from 'app/recipe/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  editMode = false;
  recipeIndex: number;
  recipeForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.recipeIndex = +params['index'];
        this.editMode = params['index'] != null;
        this.initForm();
      })
  }

  initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipe: Recipe;

    if(this.editMode) {
      recipe = this.recipeService.getRecipesByIndex(this.recipeIndex);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imageUrl: new FormControl(recipeImagePath),
      description: new FormControl(recipeDescription)
    })
  }

  onSubmit() {
    console.log(this.recipeForm);
  }
}
