import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/shared/header/header.component';
import { AutenticacaoLayoutComponent } from './layouts/autenticacao-layout/autenticacao-layout.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContatoComponent } from './components/contato/contato.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AutenticacaoLayoutComponent,
    InicioComponent,
    ContatoComponent,
    OfertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
