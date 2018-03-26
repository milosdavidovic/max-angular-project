import { RecipeService } from 'app/recipe/recipe.service';
import { ShoppingListService } from './shopping/shopping-list.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterLink, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipesWrapperComponent } from './recipe/recipes-wrapper/recipes-wrapper.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { DropdownDirective } from './common/dropdown.directive';
import { RecipeEmptyComponent } from './recipe/recipe-empty/recipe-empty.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { DataStorageService } from './common/data-storage.service';
import { SingUpComponent } from './auth/sing-up/sing-up.component';
import { SingInComponent } from './auth/sing-in/sing-in.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesWrapperComponent,
    children: [
      { path: '', component: RecipeEmptyComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
      { path: ':index', component: RecipeDetailComponent },
      { path: ':index/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] },
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'sign-up', component: SingUpComponent },
  { path: 'sign-in', component: SingInComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesWrapperComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    RecipeEmptyComponent,
    RecipeEditComponent,
    SingUpComponent,
    SingInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
