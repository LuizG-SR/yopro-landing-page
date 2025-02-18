import { Component } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.less'],
  standalone: false,
})
export class CarrinhoComponent {
  qrCodePix: string = '';

  constructor(
    public carrinhoService: CarrinhoService,
    private snackBar: MatSnackBar
  ) {}

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
    this.mostrarToaster('Código Pix copiado!');
  }

  private mostrarToaster(mensagem: string) {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbar-success'], // Classe para estilizar
    });
  }
}
