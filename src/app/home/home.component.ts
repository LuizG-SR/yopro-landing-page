// pages/home/home.component.ts
import { Component } from '@angular/core';
import { PRODUTOS } from '../../data/produto';
import Swiper from 'swiper';
import Autoplay from 'swiper';
import Navigation from 'swiper';
import Pagination from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: false,
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  produtos = PRODUTOS;

  slides = [
    { img: './assets/img/banner.png' },
    { img: './assets/img/banner_2.png' },
  ];

  currentSlide = 0;
  slideInterval: any; // Variável para armazenar o intervalo

  ngOnInit() {
    // Inicia a troca automática de slides a cada 4 segundos
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  ngOnDestroy() {
    // Limpa o intervalo quando o componente for destruído (evita bugs)
    clearInterval(this.slideInterval);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
