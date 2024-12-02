import { inject, Injectable } from '@angular/core';
import { Food } from '../models/food';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  http: HttpClient;
  foodArray: Food [] = [];

  constructor() {
    this.http = inject(HttpClient);
  }

  private handlePostError(error: HttpErrorResponse) {
    console.error('Aconteceu um erro:', error.message);
    return throwError(() => error);
  }

  getAllFood() {
    return this.http.get<Food[]>("http://localhost:3000/foods");
  }

  createFood(newFood: Food) {
    return this.http.post<Food[]>("http://localhost:3000/foods", newFood).pipe(catchError(this.handlePostError)
  );
  }
}
