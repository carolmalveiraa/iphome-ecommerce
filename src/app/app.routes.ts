import { Routes } from '@angular/router';
import { FoodFormComponent } from './pages/food-form/food-form.component';
import { FoodCatalogComponent } from './pages/food-catalog/food-catalog.component';

export const routes: Routes = [
  { path: "", component: FoodCatalogComponent },
  { path: "form", component: FoodFormComponent },
];
