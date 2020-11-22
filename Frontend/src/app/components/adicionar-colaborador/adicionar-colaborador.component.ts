import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../../service/colaborador.service.js';

@Component({
  selector: 'app-adicionar-colaborador',
  templateUrl: './adicionar-colaborador.component.html',
  styleUrls: ['./adicionar-colaborador.component.css']
})
export class AdicionarColaboradorComponent implements OnInit {
  colaborador = {
    nome: '',
    cpf: '',
    cargo: '',
    setor: '',
    salvo: false
  };
  submitted = false;

  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
  }

  saveColaborador(): void {
    const data = {
      nome: this.colaborador.nome,
      cpf: this.colaborador.cpf,
      cargo: this.colaborador.cargo,
      setor: this.colaborador.setor
    }

    this.colaboradorService.create(data).subscribe(
      res => {
        console.log(res);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  };

  newColaborador(): void {
    this.submitted = false;
    this.colaborador = {
      nome: '',
      cpf: '',
      cargo: '',
      setor: ''
    }
  };

}
