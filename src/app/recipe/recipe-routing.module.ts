import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesWrapperComponent } from "./recipes-wrapper/recipes-wrapper.component";
import { RecipeEmptyComponent } from "./recipe-empty/recipe-empty.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { AuthGuardService } from "../auth/auth-guard.service";

const routes: Routes = [
    {
        path: 'recipes', component: RecipesWrapperComponent,
        children: [
            { path: '', component: RecipeEmptyComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
            { path: ':index', component: RecipeDetailComponent },
            { path: ':index/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] },
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RecipeRoutingModule {

}