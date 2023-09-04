import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IOferta } from 'src/app/interfaces/IOferta';
import { OfertaService } from 'src/app/services/oferta.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {

  ofertaForm: FormGroup;

  constructor(private router: Router, private ofertaService: OfertaService) {
    this.ofertaForm = new FormGroup({
      valorOferta: new FormControl('', [Validators.required]),
      marca: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required]),
      cor: new FormControl('', [Validators.required]),
      ano: new FormControl('', [Validators.required]),
      kilometragem: new FormControl('', [Validators.required])
    });
  }

  async onSubmit() {
    const oferta: IOferta = {
      valor: this.ofertaForm.get('nome')?.value,
      marca: this.ofertaForm.get('marca')?.value,
      modelo: this.ofertaForm.get('modelo')?.value,
      cor: this.ofertaForm.get('cor')?.value,
      ano: this.ofertaForm.get('ano')?.value,
      km: this.ofertaForm.get('kilometragem')?.value,
    };
    await this.ofertaService.cadastrarOferta(oferta);
    this.router.navigate(['/inicio']);
  }


}