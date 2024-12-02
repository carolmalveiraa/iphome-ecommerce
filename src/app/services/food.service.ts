import { inject, Injectable } from '@angular/core';
import { Food } from '../models/food';

import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  http: HttpClient;
  foodArray: Food [] = [];
  snackBar: MatSnackBar;

  constructor() {
    this.http = inject(HttpClient);
    this.snackBar = inject(MatSnackBar);
  }

  getAllFood() {
    return this.http.get<Food[]>("http://localhost:3000/foods");
  }

  createFood(newFood: Food) {
    return this.http.post<Food[]>("http://localhost:3000/foods", newFood)
  }
}
