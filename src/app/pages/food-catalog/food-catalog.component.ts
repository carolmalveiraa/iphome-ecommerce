import { Component, EventEmitter, inject} from '@angular/core';
import { Food } from '../../models/food';
import { FoodCardComponent } from "../../shared/food-card/food-card.component";
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-food-catalog',
  standalone: true,
  imports: [FoodCardComponent],
  templateUrl: './food-catalog.component.html',
  styleUrl: './food-catalog.component.scss'
})
export class FoodCatalogComponent {
  private foodService: FoodService;
  foodArray: Food[] = [];

  constructor() {
    this.foodService = inject(FoodService);

    this.foodService.getAllFood().subscribe((foodArray: Food[]) => {
      this.foodArray = foodArray;
    });
  };
}
