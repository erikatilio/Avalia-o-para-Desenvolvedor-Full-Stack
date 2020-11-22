import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../../service/colaborador.service.js';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-colaborador',
  templateUrl: './detalhe-colaborador.component.html',
  styleUrls: ['./detalhe-colaborador.component.css']
})
export class DetalheColaboradorComponent implements OnInit {
  atualColaborador = null;
  mensagem = '';

  constructor(
    private colaboradorService: ColaboradorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mensagem = '';
    this.getColaborador(this.route.snapshot.paramMap.get('id'));
  }

  setMessagem(): void {
    this.mensagem = '';
  }

  getColaborador(id: any): void {
    this.colaboradorService.get(id).subscribe(
      data => {
        this.atualColaborador = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  updateColaborador(): void {
    this.colaboradorService.update(this.atualColaborador.id, this.atualColaborador).subscribe(
      res => {
        console.log(res);
        this.mensagem = 'O colaborador foi atualizado com sucesso!';
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteColaborador(): void {
    this.colaboradorService.delete(this.atualColaborador.id).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/colaboradores']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
