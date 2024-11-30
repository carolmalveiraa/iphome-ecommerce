import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { CartItem } from '../models/cart-item';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsArray: CartItem[] = [];

  constructor() { }

  getCartArray() {
    return this.cartItemsArray;
  }

  addItemToCart(food: Food) {
    const foundIndex: number = this.cartItemsArray.findIndex((item) => {
      return food.id === item.product.id;
    })

    if (foundIndex == -1) {
      this.cartItemsArray.push({
        product: food,
        quantity: 1
      });
    }
    else {
      this.cartItemsArray[foundIndex].quantity++;
    }
    console.log(this.cartItemsArray);
  }
}
