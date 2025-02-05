import { Component } from '@angular/core';
import { Produto } from '../models/produto.model';
import { CarrinhoService } from '../services/carrinho.service';
import { PRODUTOS } from '../../data/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.less'],
})
export class ProdutosComponent {
  produtos = PRODUTOS;
  termoBusca: string = '';

  constructor(private carrinhoService: CarrinhoService) {}

  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionarProduto(produto.id);
    alert(`${produto.nome} adicionado ao carrinho!`);
  }

  getProdutosFiltrados() {
    return this.produtos.filter((p) =>
      p.nome.toLowerCase().includes(this.termoBusca.toLowerCase())
    );
  }
}
