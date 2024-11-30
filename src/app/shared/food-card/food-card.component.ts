import { CartService } from './../../services/cart.service';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { Food } from '../../models/food';

@Component({
  selector: 'app-food-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.scss'
})
export class FoodCardComponent {
  @Input() food?: Food;

  constructor(private cartService: CartService) {
  }

  addToCart(food: Food) {
    this.cartService.addItemToCart(food);
  }
}
