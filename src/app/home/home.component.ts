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
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  produtos = PRODUTOS;

  // home.component.ts
  slides = [
    { img: './assets/img/banner.png' },
    { img: './assets/img/banner_2.png' },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
}
