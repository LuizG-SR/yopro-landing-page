// data/produtos.ts

import { Produto } from '../app/models/produto.model';

export const PRODUTOS: Produto[] = [
  {
    id: 1,
    nome: 'Whey Protein Isolado',
    descricao: 'Proteína de alta qualidade para ganho muscular.',
    preco: 149.9,
    imagens: ['assets/img/whey-protein.png'],
    favorito: true,
  },
  {
    id: 2,
    nome: 'YoPro Barra de Proteína',
    descricao: 'Snack saudável rico em proteínas.',
    preco: 12.9,
    imagens: ['assets/img/proteina.png'],
    favorito: false,
  },
  {
    id: 3,
    nome: 'Creatina Monohidratada',
    descricao: 'Aumento de força e resistência.',
    preco: 79.9,
    imagens: ['assets/img/creatina.png'],
    favorito: true,
  },
  {
    id: 4,
    nome: 'BCAA 2:1:1',
    descricao: 'Acelera a recuperação muscular.',
    preco: 99.9,
    imagens: ['assets/img/bcaa.png'],
    favorito: false,
  },
  {
    id: 5,
    nome: 'Corda de Pular Fitness',
    descricao: 'Melhore seu condicionamento físico.',
    preco: 39.9,
    imagens: ['assets/img/corda.png'],
    favorito: false,
  },
  {
    id: 6,
    nome: 'YoPro Shake Chocolate',
    descricao: 'Shake proteico para recuperação muscular.',
    preco: 9.99,
    imagens: ['./assets/img/chocolate.png'],
    favorito: true,
  },
  {
    id: 7,
    nome: 'YoPro Iogurte Morango',
    descricao: 'Iogurte proteico sabor morango.',
    preco: 6.49,
    imagens: ['./assets/img/morango.png'],
    favorito: false,
  },
  {
    id: 8,
    nome: 'YoPro Shake Baunilha',
    descricao: 'Shake proteico para recuperação muscular.',
    preco: 9.99,
    imagens: ['./assets/img/baunilha.png'],
    favorito: false,
  },
  {
    id: 9,
    nome: 'YoPro Shake Chocolate - 12 Unidades',
    descricao: 'Caixa Shake proteico para recuperação muscular.',
    preco: 74.0,
    imagens: [
      './assets/img/caixa-yopro-1.png',
      './assets/img/caixa-yopro-2.png',
    ],
    favorito: false,
  },
];
