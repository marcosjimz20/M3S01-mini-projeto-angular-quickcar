import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoLayoutComponent } from './layouts/autenticacao-layout/autenticacao-layout.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContatoComponent } from './components/contato/contato.component';

const routes: Routes = [
{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
{ path: '',
 component: AutenticacaoLayoutComponent,
  children: [
    { path: 'inicio', component: InicioComponent},
    { path: 'contato', component: ContatoComponent}
  ]
 }
 ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
