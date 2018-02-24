import { Ingredient } from './../../common/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  mySubscriptions: any;
  constructor(private shoppingListservice: ShoppingListService) {
    
  }
  
  ngOnInit() {
    this.ingredients = this.shoppingListservice.getIngredients();
    this.mySubscriptions = this.shoppingListservice.ingrediantsChanged.subscribe((ing: Ingredient[]) => { this.ingredients = ing; });
  }
  
  ngOnDestroy(): void {
    this.mySubscriptions.unsubscribe();
  }
}
