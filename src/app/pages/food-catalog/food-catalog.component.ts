import { Component, EventEmitter, Output } from '@angular/core';
import { Food } from '../../models/food';
import { FoodCardComponent } from "../../shared/food-card/food-card.component";

@Component({
  selector: 'app-food-catalog',
  standalone: true,
  imports: [FoodCardComponent],
  templateUrl: './food-catalog.component.html',
  styleUrl: './food-catalog.component.scss'
})
export class FoodCatalogComponent {
  @Output() warnApp: EventEmitter<Food> = new EventEmitter();

  foodArray: Food [] = [
    {
      id: 1,
      title: "Whopper",
      serves: "1 pessoa",
      description: `Um hambúrguer com uma carne bovina grelhada de 113g, pão com gergelim, queijo derretido, picles, salada fresca (alface, cebola, tomate), ketchup e maionese bk.`,
      imageLink:"https://static.ifood-static.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202408051111_5Q5J_i.jpg",
      price: 29.99
    },
    {
      id: 2,
      title: "King jr",
      serves: "1 pessoa",
      description: `Um delicioso hambúrguer com carne bovina grelhada de 56g, pão com gergelim, queijo derretido, ketchup e maionese bk e você recebe um brinde surpresa.`,
      imageLink:"https://static.ifood-static.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202410091119_A3QE_i.jpg",
      price: 35.95
    },
    {
      id: 3,
      title: "Combo dos Parças",
      serves: "1 pessoa",
      description: `1 Whopper Nachos + 3 unidades dos novos nachos fries (triângulos empanados em farinha crocante com queijo sabor cheddar cremoso), 3 anéis de cebola, alface fresquinha e maionese.`,
      imageLink:"https://static.ifood-static.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202408051111_38Q4_i.jpg",
      price: 43.95
    },
    {
      id: 4,
      title: "2 Sandubas + 2 Sandubinhas + 2 Bebidas",
      serves: "2 pessoa",
      description: `2 sanduíches (Escolha um Sanduíche entre: Whopper, Chicken Duplo, Rodeio Duplo, Big King, Whopper de plantas, Stacker Duplo e Cheeseburger Duplo) + 2 sanduíches entre: (Cheeseburger, cheddar jr, chicken jr e rodeio) + 2 bebidas.`,
      imageLink:"https://static.ifood-static.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202408131512_63PG_i.jpg",
      price: 72.95
    },
    {
      id: 5,
      title: "King Costela",
      serves: "1 pessoa",
      description: `Chegou o King Costela, com costela desfiada de verdade! Vai encarar? Sanduíche no pão brioche com hambúrguer de carne bovina grelhada, 2 fatias de queijo sabor cheddar, carne de costela bovina desfiada, chutney de cebola roxa, cebola crispy, 3 anéis de onion rings e maionese de alho.`,
      imageLink:"https://static.ifood-static.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202406041821_1A6G_i.jpg",
      price: 39.99
    },
    {
      id: 6,
      title: "Combo Bk Original",
      serves: "1 pessoa",
      description: `Pão de brioche, maionese temperada, cebola salteada, 2 fatias de queijo, carne alta e suculenta (120g). Acompanha batata e bebida.`,
      imageLink:"https://static.ifood-static.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202408121513_RG6S_i.jpg",
      price: 39.99
    },
    {
      id: 7,
      title: "Combo Stacker Duplo Bacon",
      serves: "1 pessoa",
      description: `Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo derretido, fatias de bacon crocante e o exclusivo molho bk stacker. Acompanha batata frita e bebida.`,
      imageLink:"https://static.ifood-static.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202408121513_S6C1_i.jpg",
      price: 39.99
    },
  ];

  warnParentAboutItemAddition(food: Food) {
    console.log(`Item adicionado ao carrinho ${food.title}`);
    this.warnApp.emit(food);
  }
}
