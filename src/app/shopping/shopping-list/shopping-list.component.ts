import { Ingredient } from './../../common/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { DataStorageService } from '../../common/data-storage.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  mySubscriptions: any;
  constructor(private shoppingListservice: ShoppingListService, 
  private dataStorage: DataStorageService) {

  }

  ngOnInit() {
    this.ingredients = this.shoppingListservice.getIngredients();
    this.mySubscriptions = this.shoppingListservice.ingrediantsChanged
      .subscribe((ing: Ingredient[]) => {
        this.ingredients = ing;
      });
  }

  onEdit(index: number) {
    this.shoppingListservice.editingStarted
      .next(index);
  }

  onSaveOrder() {
    this.dataStorage.setShoppingList();
  }

  ngOnDestroy(): void {
    this.mySubscriptions.unsubscribe();
  }
}
