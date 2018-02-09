import { Ingredient } from './../../common/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef
  @ViewChild('amountInput') amountInput: ElementRef

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
  }

  onAddClick() {
    const item = new Ingredient(this.nameInput.nativeElement.value, 
      this.amountInput.nativeElement.value);
    this.shoppingListService.addIngredient(item)
    // this.shoppingListService.itemAdded.emit(item);
  };
}
