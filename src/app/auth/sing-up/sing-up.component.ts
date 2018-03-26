import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  errorMessage: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.signUp(form.value.email, form.value.password)
      .then(() => {
        this.errorMessage = null;
        form.reset();
      })
      .catch((error: firebase.FirebaseError) => {
        console.log(error);
        this.errorMessage = error.message;
      })
  }
}
