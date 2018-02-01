import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'app/common/ingredient.model';

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

}
