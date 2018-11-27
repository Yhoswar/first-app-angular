import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	show:boolean=true;

	activo:string="";

	arreglos:Array<any>=[
	{nombre:'Yhoswar',apellido:'Perez',correo:'yhoswarperez@gmail.com'},
	{nombre:'Jose',apellido:'Perez',correo:'jose@gmail.com'},
	{nombre:'Luis',apellido:'Gonzales',correo:'Luis@gmail.com'}
	]
}
