import { Recipe } from './../recipe/recipe.model';

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../common/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private dataStorage: DataStorageService) {

  }

  ngOnInit() {
  }

  onSaveData() {
    this.dataStorage.insertRecipes();
  }

  onFetchData() {
    this.dataStorage.fetchRecipes();
  }
}
