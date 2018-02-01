import { Recipe } from './../recipe/recipe.model';

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectionChanged = new EventEmitter<string>();
  activeView: string;

  constructor() { }

  ngOnInit() {
    this.activeView = 'recipe';
    console.log(this.activeView);
    this.selectionChanged.emit(this.activeView);
  }

  onRecipesChosen() {
    this.activeView = 'recipe';
    console.log(this.activeView);
    this.selectionChanged.emit(this.activeView);
  }

  onShoppingChosen() {
    this.activeView = 'shopping';
    console.log(this.activeView);
    this.selectionChanged.emit(this.activeView);
  }
}
