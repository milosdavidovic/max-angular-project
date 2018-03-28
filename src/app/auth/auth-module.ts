import { NgModule } from "@angular/core";
import { SingInComponent } from "./sing-in/sing-in.component";
import { SingUpComponent } from "./sing-up/sing-up.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        SingInComponent,
        SingUpComponent
    ],
    imports: [
        AuthRoutingModule,
        CommonModule,
        FormsModule
    ]

})
export class AuthModule {

}