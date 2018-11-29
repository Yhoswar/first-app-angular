import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

	equipo:Array<any>=
	[
	{
	nombre:'Yhoswar',
	especialidad:'Developer',
	descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, minus ex dolores quisquam cum, ipsam veritatis odio provident veniam maxime, sunt! Tempora sapiente non natus illo, vitae blanditiis ut animi?',
	},
	{
	nombre:'Maria',
	especialidad:'Marketing',
	descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, minus ex dolores quisquam cum, ipsam veritatis odio provident veniam maxime, sunt! Tempora sapiente non natus illo, vitae blanditiis ut animi?',
	}
	]

  constructor() { 
  	console.log('Estas usando servicio');
  }

  obtenerEquipo()
  {
  	return this.equipo;
  }
  obtenerUnEquipo(i)
  {
  	return this.equipo[i];
  }
}
