// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode'; // Correto agora!

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdutosComponent,
    CarrinhoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    QRCodeComponent,
    SlickCarouselModule, // Importação corrigida!
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
