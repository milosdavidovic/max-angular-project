import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeData: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onClick() {
    this.recipeService.recipeSelected.emit(this.recipeData);
  }
}
