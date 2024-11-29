import { Component, Input } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CurrencyPipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
  totalPrice: number = 0;
  @Input("cartArr") cartItemsArray: CartItem[] = [];
  addItem(item: CartItem) {
    item.quantity++
    this.totalPrice += item.product.price;
  }

  removeItem(item: CartItem) {
    if (item.quantity <= 0) return;
    item.quantity--
    this.totalPrice -= item.product.price;
    this.totalPrice = Math.max(0, this.totalPrice);
  }
}
