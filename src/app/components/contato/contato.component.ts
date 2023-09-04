import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IContato } from 'src/app/interfaces/IContato';
import { IOferta } from 'src/app/interfaces/IOferta';
import { ContatoService } from 'src/app/services/contato.service';
import { OfertaService } from 'src/app/services/oferta.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contatoForm: FormGroup;
  ofertas: IOferta[] = [];

  constructor(
    private router: Router, 
    private ofertaService: OfertaService,
    private contatoService: ContatoService
    ) {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      valorOferta: new FormControl('', [Validators.required]),
      mensagem: new FormControl('', [Validators.required])
    });
  }

  async ngOnInit() {
    this.ofertas = await this.ofertaService.obterOfertas();
  }

  async onSubmit() {
    const contato: IContato = {
      nome: this.contatoForm.get('titulo')?.value,
      email: this.contatoForm.get('email')?.value,
      telefone: this.contatoForm.get('telefone')?.value,
      valorOferta: this.contatoForm.get('valorOferta')?.value,
      mensagem: this.contatoForm.get('mensagem')?.value,
      cpf: ''
    };
    await this.contatoService.cadastrarContato(contato);
    this.router.navigate(['/contato']);
  }

}
