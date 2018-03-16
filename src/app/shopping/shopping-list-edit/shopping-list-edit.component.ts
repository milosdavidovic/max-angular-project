import { Ingredient } from './../../common/ingredient.model';
import { Component, OnInit, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editIndex: number;
  editIngredient: Ingredient;
  @ViewChild('f') editForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
    this.subscription = this.shoppingListService.editingStarted
      .subscribe((index: number) => {
        this.editMode = true;
        this.editIndex = index;
        this.editIngredient = this.shoppingListService.getIngredient(index);
        this.editForm.setValue({
          name: this.editIngredient.name,
          amount: this.editIngredient.amount
        })
      })
  }

  onSubmit(form: NgForm) {
    const item = new Ingredient(form.value.name,
      form.value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editIndex, item);
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(item)
    }
    this.editForm.resetForm();
  }

  onClear() {
    this.editForm.reset();
    this.editMode = false;
  }

  onDelete(index: number) {
    this.shoppingListService.deleteIngredient(this.editIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
