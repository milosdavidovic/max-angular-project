import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { RecipesWrapperComponent } from "./recipes-wrapper/recipes-wrapper.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { DropdownDirective } from "../common/dropdown.directive";
import { RecipeEmptyComponent } from "./recipe-empty/recipe-empty.component";
import { RecipeRoutingModule } from "./recipe-routing.module";
import { SharedModule } from "../common/shared-module";

@NgModule({
    declarations:[
        RecipesWrapperComponent,
        RecipeEmptyComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeItemComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipeRoutingModule,
        SharedModule
    ]

})
export class RecipeModule {

}