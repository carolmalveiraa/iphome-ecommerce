import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FoodCardComponent } from './shared/food-card/food-card.component';
import { FoodCatalogComponent } from './pages/food-catalog/food-catalog.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CartComponent } from './shared/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FoodCatalogComponent, MatSidenavModule, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'iphome-delivery';
}
