import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.css']
})
export class EjemplosComponent implements OnInit {

	show:boolean=true;

	activo:string="";

	arreglos:Array<any>=[
	{nombre:'Yhoswar',apellido:'Perez',correo:'yhoswarperez@gmail.com'},
	{nombre:'Jose',apellido:'Perez',correo:'jose@gmail.com'},
	{nombre:'Luis',apellido:'Gonzales',correo:'Luis@gmail.com'}
	]

  constructor() { }

  ngOnInit() {
  }


}
