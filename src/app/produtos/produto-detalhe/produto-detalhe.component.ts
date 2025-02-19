import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUTOS } from '../../../data/produto';
import { Produto } from '../../models/produto.model';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.less'],
  standalone: false,
})
export class ProdutoDetalheComponent implements OnInit {
  produto?: Produto;
  imagemSelecionada: string = '';
  quantidade: number = 1;

  constructor(
    private route: ActivatedRoute,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = PRODUTOS.find((p) => p.id === id);

    // Define a imagem principal como a primeira do array
    if (this.produto) {
      this.imagemSelecionada = this.produto.imagens[0];
    }
  }

  selecionarImagem(imagem: string) {
    this.imagemSelecionada = imagem;
  }

  aumentarQuantidade() {
    this.quantidade++;
  }

  diminuirQuantidade() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho(produto: Produto) {
    for (let i = 0; i < this.quantidade; i++) {
      this.carrinhoService.adicionarProduto(produto.id);
    }
  }
}
