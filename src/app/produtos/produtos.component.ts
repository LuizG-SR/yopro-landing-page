import { Component } from '@angular/core';
import { Produto } from '../models/produto.model';
import { CarrinhoService } from '../services/carrinho.service';
import { PRODUTOS } from '../../data/produto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.less'],
  standalone: false,
})
export class ProdutosComponent {
  produtos = PRODUTOS;
  termoBusca: string = '';

  constructor(
    private carrinhoService: CarrinhoService,
    private snackBar: MatSnackBar
  ) {}

  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionarProduto(produto.id);
  }

  getProdutosFiltrados() {
    return this.produtos.filter((p) =>
      p.nome.toLowerCase().includes(this.termoBusca.toLowerCase())
    );
  }
}
