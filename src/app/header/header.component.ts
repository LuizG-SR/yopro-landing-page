// header.component.ts
import { Component, ViewChild } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  standalone: false,
})
export class HeaderComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(public carrinhoService: CarrinhoService) {}

  toggleMenu() {
    this.sidenav.toggle();
  }
}
