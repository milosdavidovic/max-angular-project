import { Ingredient } from './../../common/ingredient.model';
import { Component, OnInit, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const item = new Ingredient(form.value.name, 
      form.value.amount);
    this.shoppingListService.addIngredient(item)
  }

}
