import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarColaboradorComponent } from './components/adicionar-colaborador/adicionar-colaborador.component';
import { DetalheColaboradorComponent } from './components/detalhe-colaborador/detalhe-colaborador.component';
import { ListaColaboradorComponent } from './components/lista-colaborador/lista-colaborador.component';

const routes: Routes = [
  { path: '', redirectTo: 'colaboradores', pathMatch: 'full' },
  { path: 'colaboradores', component: ListaColaboradorComponent },
  { path: 'colaboradores/:id', component: DetalheColaboradorComponent },
  { path: 'adicionar', component: AdicionarColaboradorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
