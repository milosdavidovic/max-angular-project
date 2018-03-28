import { RecipeService } from 'app/recipe/recipe.service';
import { ShoppingListService } from './shopping/shopping-list.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterLink, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataStorageService } from './common/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { RecipeModule } from './recipe/recipe.module';
import { AppRoutingModule } from './app-routing.module';
import { RecipeRoutingModule } from './recipe/recipe-routing.module';
import { SharedModule } from './common/shared-module';
import { ShoppingRoutesModule } from './shopping/shopping-routes.module';
import { ShoppingModule } from './shopping/shopping.module';
import { AuthModule } from './auth/auth-module';
import { AuthRoutingModule } from './auth/auth-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RecipeRoutingModule,
    ShoppingRoutesModule,
    AuthRoutingModule,
    AuthModule,
    RecipeModule,
    ShoppingModule,
    SharedModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
