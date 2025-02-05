// data/produtos.ts

import { Produto } from '../app/models/produto.model';

export const PRODUTOS: Produto[] = [
  {
    id: 1,
    nome: 'YoPro Chocolate',
    preco: 8.99,
    imagem: './assets/img/chocolate.png',
  },
  {
    id: 2,
    nome: 'YoPro Morango',
    preco: 8.99,
    imagem: './assets/img/morango.png',
  },
];
