import { FoodService } from './../../services/food.service';
import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-form',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule,ReactiveFormsModule],
  templateUrl: './food-form.component.html',
  styleUrl: './food-form.component.scss'
})
export class FoodFormComponent {
  private FoodService: FoodService;
  private router: Router;
  foodForm: FormGroup;

  constructor() {
    this.FoodService = inject(FoodService);
    this.router = inject(Router);

    this.foodForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      serves: new FormControl('', [Validators.required]),
      imageLink: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      description: new FormControl('', [Validators.required]),
      availabeInStock: new FormControl(0, [Validators.required]),
    });
  }

  submitForm() {
    console.log("Formulário foi Submetido!");
    console.log(this.foodForm.value);

    this.FoodService.createFood({
      id: this.FoodService.getNextId(),
      ...this.foodForm.value
    });

    this.router.navigate(['foods']);

  }
}
