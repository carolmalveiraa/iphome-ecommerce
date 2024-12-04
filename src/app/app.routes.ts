import { Routes } from '@angular/router';
import { FoodFormComponent } from './pages/food-form/food-form.component';
import { FoodCatalogComponent } from './pages/food-catalog/food-catalog.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "foods", component: FoodCatalogComponent },
  { path: "", redirectTo: "foods", pathMatch: "full" },
  { path: "form", component: FoodFormComponent, canActivate: [authGuard] },
  { path: "**", component: NotFoundComponent },
];
