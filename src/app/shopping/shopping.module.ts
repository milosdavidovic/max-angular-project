import { NgModule } from "@angular/core";
import { ShoppingRoutesModule } from "./shopping-routes.module";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListEditComponent
    ],
    imports: [
        ShoppingRoutesModule,
        FormsModule,
        CommonModule
    ],
    exports: [

    ]
})
export class ShoppingModule {

}