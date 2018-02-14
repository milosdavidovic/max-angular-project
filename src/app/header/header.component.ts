import { Recipe } from './../recipe/recipe.model';

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onRecipesChosen() {
    this.router.navigate(['recipes']);
  }

  onShoppingChosen() {
    this.router.navigate(['shopping-list']);
  }
}
