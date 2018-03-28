import { Routes, RouterModule } from "@angular/router";
import { RecipesWrapperComponent } from "./recipe/recipes-wrapper/recipes-wrapper.component";
import { RecipeEmptyComponent } from "./recipe/recipe-empty/recipe-empty.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";
import { AuthGuardService } from "./auth/auth-guard.service";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { ShoppingListComponent } from "./shopping/shopping-list/shopping-list.component";
import { SingUpComponent } from "./auth/sing-up/sing-up.component";
import { SingInComponent } from "./auth/sing-in/sing-in.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'sign-up', component: SingUpComponent },
    { path: 'sign-in', component: SingInComponent }
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