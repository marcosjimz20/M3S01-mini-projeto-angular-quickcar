import { Injectable } from '@angular/core';
import { IOferta } from '../interfaces/IOferta';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  ofertas: IOferta[] = [];
  constructor(private httpClient: HttpClient) { }
  async obterOfertas() {
    this.ofertas = await lastValueFrom(this.httpClient.get<IOferta[]>("http://localhost:3000/inicio"));
    return this.ofertas;
  }
  filtrarOfertas(filtro: string) {
    let ofertasFiltradas: IOferta[] = [];
    const filtroMinusculo = filtro.toLocaleLowerCase();
    for (const oferta of this.ofertas) {
      const modelo = oferta.modelo.toLocaleLowerCase();
      
      if (modelo.includes(filtroMinusculo))
        ofertasFiltradas.push(oferta);
    }
    return ofertasFiltradas;
  }
  async obterNumeroOfertas() {
    if (this.ofertas.length === 0)
      await this.obterOfertas();
    return this.ofertas.length;
  }

  async cadastrarOferta(oferta: IOferta) {
    return lastValueFrom(this.httpClient.post("http://localhost:3000/inicio", oferta));
  }
}
