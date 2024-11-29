import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() warnFoodCatalog: EventEmitter<Food> = new EventEmitter();

  warnParentAboutItemAddition(food: Food) {
    console.log(`Avisa meu pai que eu cliquei no ${food.title}`);
    this.warnFoodCatalog.emit(food);
  }
}
