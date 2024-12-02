import {Component, OnInit, Input} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDrawer} from '@angular/material/sidenav';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() drawer!: MatDrawer;
  title: string = "Iphome - Delivery Service";

  openCart() {
    this.drawer.toggle();
    console.log("Abrindo o carrinho..");
  }
}
