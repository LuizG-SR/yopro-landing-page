// data/produtos.ts

import { Produto } from '../app/models/produto.model';

export const PRODUTOS: Produto[] = [
  {
    id: 1,
    nome: 'YoPro Shake Chocolate',
    preco: 9.99,
    imagens: ['./assets/img/chocolate.png'],
    favorito: true,
  },
  {
    id: 2,
    nome: 'YoPro Iogurte Morango',
    preco: 6.49,
    imagens: ['./assets/img/morango.png'],
    favorito: false,
  },
  {
    id: 3,
    nome: 'YoPro Barra de Proteína',
    preco: 5.99,
    imagens: ['./assets/img/proteina.png'],
    favorito: true,
  },
  {
    id: 4,
    nome: 'YoPro Shake Baunilha',
    preco: 9.99,
    imagens: ['./assets/img/baunilha.png'],
    favorito: false,
  },
  {
    id: 5,
    nome: 'YoPro Shake Chocolate - 12 Unidades',
    preco: 74.0,
    imagens: [
      './assets/img/caixa-yopro-1.png',
      './assets/img/caixa-yopro-2.png',
    ],
    favorito: false,
  },
];
