import { Recipe } from './../recipe/recipe.model';

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../common/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private dataStorage: DataStorageService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }

  onSaveData() {
    this.dataStorage.setRecipes();
  }

  onFetchData() {
    this.dataStorage.getRecipes();
  }

  onLogout() {
    this.authService.logOut();
    this.router.navigate(['/sign-in'], { relativeTo: this.activatedRoute });
  }
}
