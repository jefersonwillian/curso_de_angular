import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

	nomePortal: string;

	cursos: string[] =  this.cursosService.getCurso();

  constructor(
    public cursosService: CursosService,
    ) { 
  	this.nomePortal = "www.jeferson.com.br";

    console.log(this.cursos);
  }

  ngOnInit() {
  }

}
