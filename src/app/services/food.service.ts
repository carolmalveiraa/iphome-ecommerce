import { inject, Injectable } from '@angular/core';
import { Food } from '../models/food';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  http: HttpClient;
  foodArray: Food [] = [];

  constructor() {
    this.http = inject(HttpClient);
  }

  getNextId () {
    return this.foodArray.length + 1;
  }

  getAllFood() {
    return this.http.get<Food[]>("http://localhost:3000/foods");
  }

  createFood(newFood: Food) {
    this.foodArray.push(newFood);
  }
}
