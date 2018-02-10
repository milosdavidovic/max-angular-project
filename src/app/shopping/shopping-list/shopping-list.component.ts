import { Ingredient } from './../../common/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingListservice: ShoppingListService) {

  }

  ngOnInit() {
    this.ingredients = this.shoppingListservice.getIngredients();
    this.shoppingListservice.ingrediantsChanged.subscribe((ing: Ingredient[]) => { this.ingredients = ing; });
  }

}
