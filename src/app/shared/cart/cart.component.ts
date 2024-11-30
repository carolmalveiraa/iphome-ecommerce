import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { CartItem } from '../../models/cart-item';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private cartService: CartService;
  totalPrice: number = 0;

  cartItemsArray: CartItem[] = [];

  constructor() {
    this.cartService = inject(CartService);
    this.cartItemsArray = this.cartService.getCartArray();
  }
  addItem(item: CartItem) {
    item.quantity++
    this.totalPrice += item.product.price;
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item);
}
}
