import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderComponent } from './shared/header/header.component';
import { FoodCatalogComponent } from './pages/food-catalog/food-catalog.component';
import { CartComponent } from './shared/cart/cart.component';
import { CartItem } from './models/cart-item';
import { Food } from './models/food';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FoodCatalogComponent, MatSidenavModule, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'iphome-delivery';
  cartItemsArray: CartItem[] = [];

  addItemToCart(food: Food) {
    this.cartItemsArray.push({
      product: food,
      quantity: 1
    });
    console.log(this.cartItemsArray);
  }
}
