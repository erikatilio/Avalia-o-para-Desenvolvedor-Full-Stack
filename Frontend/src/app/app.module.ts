import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionarColaboradorComponent } from './components/adicionar-colaborador/adicionar-colaborador.component';
import { DetalheColaboradorComponent } from './components/detalhe-colaborador/detalhe-colaborador.component';
import { ListaColaboradorComponent } from './components/lista-colaborador/lista-colaborador.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionarColaboradorComponent,
    DetalheColaboradorComponent,
    ListaColaboradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
