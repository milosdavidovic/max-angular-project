import { Routes, RouterModule } from "@angular/router";
import { RecipesWrapperComponent } from "./recipe/recipes-wrapper/recipes-wrapper.component";
import { RecipeEmptyComponent } from "./recipe/recipe-empty/recipe-empty.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";
import { AuthGuardService } from "./auth/auth-guard.service";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { ShoppingListComponent } from "./shopping/shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'recipes', loadChildren: './recipe/recipe.module#RecipeModule' },
    { path: 'shopping-list', loadChildren: './shopping/shopping.module#ShoppingModule' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}