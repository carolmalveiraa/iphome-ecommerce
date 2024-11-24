import { Component } from '@angular/core';
import { Food } from '../../models/food';

@Component({
  selector: 'app-food-catalog',
  standalone: true,
  imports: [],
  templateUrl: './food-catalog.component.html',
  styleUrl: './food-catalog.component.scss'
})
export class FoodCatalogComponent {
  foodArray: Food [] = [
    {
      title: "Whopper",
      serves: "1 pessoa",
      description: `Um hambúrguer com uma carne bovina grelhada de 113g, pão com gergelim, queijo derretido, picles, salada fresca (alface, cebola, tomate), ketchup e maionese bk.`,
      imageLink:"https://static.ifood-static.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202408051111_5Q5J_i.jpg",
      price: 29.99
    },
    {
      title: "Kid jr",
      serves: "1 pessoa",
      description: `Um delicioso hambúrguer com carne bovina grelhada de 56g, pão com gergelim, queijo derretido, ketchup e maionese bk e você recebe um brinde surpresa.`,
      imageLink:"https://static.ifood-static.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202410091119_A3QE_i.jpg",
      price: 35.90
    },
  ];
}
