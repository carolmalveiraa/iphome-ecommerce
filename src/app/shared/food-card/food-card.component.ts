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
    imageLink:"https://static.ifood-static.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202408051111_5Q5J_i.jpg",
    price: 29.99
  };
}
