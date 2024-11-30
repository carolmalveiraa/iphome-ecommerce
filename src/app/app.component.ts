import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderComponent } from './shared/header/header.component';
import { FoodCatalogComponent } from './pages/food-catalog/food-catalog.component';
import { CartComponent } from './shared/cart/cart.component';
import { CartService } from './services/cart.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FoodCatalogComponent, MatSidenavModule, CartComponent],
  providers: [CartService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'iphome-delivery';
}
