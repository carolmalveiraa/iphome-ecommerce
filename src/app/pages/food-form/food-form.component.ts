import { FoodService } from './../../services/food.service';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  private snackBar: MatSnackBar;
  private FoodService: FoodService;
  private router: Router;
  foodForm: FormGroup;

  constructor() {
    this.FoodService = inject(FoodService);
    this.router = inject(Router);
    this.snackBar = inject(MatSnackBar);

    this.foodForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      serves: new FormControl('', [Validators.required]),
      imageLink: new FormControl('', [Validators.required, Validators.pattern('https?://.+')]),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('', [Validators.required]),
      avaibleInStock: new FormControl(0, [Validators.required, Validators.min(0)]),
    });
  }

  submitForm() {
    console.log("Formulário foi Submetido!");
    console.log(this.foodForm.value);

    this.FoodService.createFood(this.foodForm.value).subscribe(() => {
      this.snackBar.open('Food adicionado com sucesso!', 'Fechar', {duration: 2000});
      this.router.navigate(['foods']);
    }, () => {
      this.snackBar.open('Erro ao adicionar Food!', 'Fechar', {duration: 2000});
    });
  }
}
