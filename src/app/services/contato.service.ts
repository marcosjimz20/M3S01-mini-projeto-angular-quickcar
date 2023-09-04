import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContato } from '../interfaces/IContato';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contato: IContato[] = [];

  constructor(private httpClient: HttpClient) { }

  async obterContatos() {
    this.contato = await lastValueFrom(this.httpClient.get<IContato[]>("http://localhost:3000/contato"));
    return this.contato;
  }

  cadastrarContato(contato: IContato) {
    return lastValueFrom(this.httpClient.post("http://localhost:3000/contato", contato));
  }

  filtrarContatos(filtro: string) {
    let contatosFiltrados: IContato[] = [];
    const filtroMinusculo = filtro.toLocaleLowerCase();
    for (const contato of this.contato) {
      const nome = contato.nome.toLocaleLowerCase();
      if (nome.includes(filtroMinusculo))
        contatosFiltrados.push(contato);
    }
    return contatosFiltrados;
  }
  async obterNumeroContatos() {
    if (this.contato.length === 0)
      await this.obterContatos();
    return this.contato.length;
  }
}
