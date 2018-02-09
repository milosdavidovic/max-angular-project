import { Ingredient } from './../../common/ingredient.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Tomato', 4),
    new Ingredient('Potato', 2)
  ];
  constructor() { }

  ngOnInit() {
  }

  onItemAdded(item: Ingredient) {
    this.ingredients.push(new Ingredient(item.name, item.amount));
  }
}
