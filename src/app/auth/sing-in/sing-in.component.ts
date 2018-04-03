import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  errorMessage: string;

  constructor(private authService: AuthService,
    private router: Router,
    private acivatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.signIn(form.value.email, form.value.password)
      .then((response) => {
        this.errorMessage = null;
        form.reset();
        this.authService.setToken();
        this.router.navigate(['/home'], { relativeTo: this.acivatedRoute });
      })
      .catch((error: firebase.FirebaseError) => {
        console.log(error);
        this.errorMessage = error.message;
      })
  }

}
