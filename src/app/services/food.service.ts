import { Injectable } from '@angular/core';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  foodArray: Food [] = [];
  
  constructor() { }

  getNextId () {
    return this.foodArray.length + 1;
  }

  getAllFood() {
    return this.foodArray;
  }

  createFood(newFood: Food) {
    this.foodArray.push(newFood);
  }
}
