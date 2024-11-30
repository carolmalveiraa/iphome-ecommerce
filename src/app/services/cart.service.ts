import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { CartItem } from '../models/cart-item';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsArray: CartItem[] = [];
  private totalPrice: number = 0;

  constructor() { }

  getItemById(id: number) {
    const foundIndex: number = this.cartItemsArray.findIndex((item) => {
      return item.product.id === id;
    })
    return foundIndex;
  }
  getTotalPrice() {
    return this.totalPrice;
  }
  // Obtém os itens do carrinho
  getCartArray() {
    return this.cartItemsArray;
  }

// Aumenta a quantidade de um item no carrinho
  addItem(item: CartItem) {
    if (item.quantity >= item.product.availableInStock) return;
    item.quantity++
    this.totalPrice += item.product.price;

}

  removeItem(item: CartItem) {
    if (item.quantity <= 1) {
      const index = this.getItemById(item.product.id);
      this.cartItemsArray.splice(index, 1);
    };
    item.quantity--
    this.totalPrice -= item.product.price;
    this.totalPrice = Math.max(0, this.totalPrice);
  }

  addItemToCart(food: Food) {
    const index = this.getItemById(food.id);

    if (index == -1) {
      this.cartItemsArray.push({
        product: food,
        quantity: 1
      });
    } else {
      this.addItem(this.cartItemsArray[index]);
    }
    console.log(this.cartItemsArray);
  }
}
