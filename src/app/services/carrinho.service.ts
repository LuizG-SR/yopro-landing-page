import { Injectable } from '@angular/core';
import { ItemCarrinho } from '../models/item-carrinho.model';
import { Produto } from '../models/produto.model';
import { PRODUTOS } from '../../data/produto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private carrinho: ItemCarrinho[] = [];
  private chavePix = 'luizgsribeiro@gmail.com'; // Substitua por uma chave real

  constructor(private snackBar: MatSnackBar) {
    this.carregarCarrinho();
  }

  /** Adiciona um item ao carrinho */
  adicionarProduto(idProduto: number) {
    const itemExistente = this.carrinho.find(
      (item) => item.idProduto === idProduto
    );
    const produto = PRODUTOS.find((p) => p.id === idProduto);

    if (!produto) return; // Se o produto não for encontrado, sai da função

    if (itemExistente) {
      itemExistente.quantidade++;
      itemExistente.total = itemExistente.quantidade * produto.preco;
    } else {
      this.carrinho.push({
        idProduto,
        quantidade: 1,
        total: produto.preco,
      });
    }

    this.salvarCarrinho();
    this.mostrarToaster(`${produto.nome} adicionado ao carrinho!`);
  }

  private mostrarToaster(mensagem: string) {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbar-success'], // Classe para estilizar
    });
  }

  /** Remove um item do carrinho */
  removerProduto(index: number) {
    this.carrinho.splice(index, 1);
    this.salvarCarrinho();
  }

  /** Aumenta a quantidade de um item */
  aumentarQuantidade(index: number) {
    const item = this.carrinho[index];
    const produto = PRODUTOS.find((p) => p.id === item.idProduto);
    if (!produto) return;

    item.quantidade++;
    item.total = item.quantidade * produto.preco;
    this.salvarCarrinho();
  }

  /** Diminui a quantidade de um item */
  diminuirQuantidade(index: number) {
    const item = this.carrinho[index];
    const produto = PRODUTOS.find((p) => p.id === item.idProduto);
    if (!produto) return;

    if (item.quantidade > 1) {
      item.quantidade--;
      item.total = item.quantidade * produto.preco;
    } else {
      this.removerProduto(index);
    }
    this.salvarCarrinho();
  }

  /** Retorna os itens do carrinho */
  getCarrinho(): ItemCarrinho[] {
    return this.carrinho;
  }

  /** Retorna detalhes completos do carrinho */
  getCarrinhoDetalhado(): (ItemCarrinho & { produto: Produto | undefined })[] {
    return this.carrinho.map((item) => ({
      ...item,
      produto: PRODUTOS.find((p) => p.id === item.idProduto),
    }));
  }

  /** Calcula o total da compra */
  calcularTotal(): number {
    return this.carrinho.reduce((total, item) => total + item.total, 0);
  }

  /** Salva o carrinho no Local Storage */
  private salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
  }

  /** Carrega os dados do carrinho ao iniciar o serviço */
  private carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      this.carrinho = JSON.parse(carrinhoSalvo);
    }
  }

  /** Limpa o carrinho e remove do Local Storage */
  limparCarrinho() {
    this.carrinho = [];
    localStorage.removeItem('carrinho');
  }

  gerarPayloadPix(): string {
    const total = this.calcularTotal();
    return `00020126580014BR.GOV.BCB.PIX0136${
      this.chavePix
    }520400005303986540${total.toFixed(
      2
    )}5802BR5913YoPro Store6010Sao Paulo62070503***6304`;
  }

  getQuantidadeItens() {
    return this.carrinho.length;
  }
}
