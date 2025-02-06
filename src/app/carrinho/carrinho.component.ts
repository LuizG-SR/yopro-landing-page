import { Component } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.less'],
  standalone: false,
})
export class CarrinhoComponent {
  qrCodePix: string = '';

  constructor(public carrinhoService: CarrinhoService) {}

  abrirModalPagamento() {
    this.qrCodePix = this.carrinhoService.gerarPayloadPix();
    const modal = document.getElementById('pixModal');
    if (modal) modal.style.display = 'block';
  }

  fecharModalPagamento() {
    const modal = document.getElementById('pixModal');
    if (modal) modal.style.display = 'none';
  }

  aumentarQuantidade(index: number) {
    this.carrinhoService.aumentarQuantidade(index);
  }

  diminuirQuantidade(index: number) {
    this.carrinhoService.diminuirQuantidade(index);
  }

  removerProduto(index: number) {
    this.carrinhoService.removerProduto(index);
  }

  limparCarrinho() {
    this.carrinhoService.limparCarrinho();
  }

  copiarPix() {
    navigator.clipboard.writeText(this.qrCodePix);
    alert('Código Pix copiado!');
  }
}
