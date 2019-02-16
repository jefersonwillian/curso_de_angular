import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCurso(){
  	return ['Java', 'Ext Js', 'Angular'];
  }
}
