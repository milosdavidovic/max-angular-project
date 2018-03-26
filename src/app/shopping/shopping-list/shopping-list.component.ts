import { Ingredient } from './../../common/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { DataStorageService } from '../../common/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  mySubscriptions: any;
  constructor(private shoppingListservice: ShoppingListService,
    private dataStorage: DataStorageService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/sign-in'], { relativeTo: this.activatedRoute });
    }
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
