import { Component } from '@angular/core';
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
  food: Food = {
    title: "Whopper",
    serves: "1 pessoa",
    description: `Um hambúrguer com uma carne bovina grelhada de 113g, pão com gergelim, queijo derretido, picles, salada fresca (alface, cebola, tomate), ketchup e maionese bk.`,
    imageLink: "https://d3sn2rlrwxy0ce.cloudfront.net/Banner-Whopper-principal-m.jpg?mtime=20210416235547&focal=none",
    price: 29.99
  }
}
