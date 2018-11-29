import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EquipoService} from './../equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {


equipo:Array<any>=[];

  constructor(private ruta:ActivatedRoute,private _servicio:EquipoService) 
  	{
  		/*this.ruta.params.subscribe(params=>
  		{
  			console.log(params['id']);
  			this.equipo=this._servicio.obtenerUnEquipo(params['id']);
  		})*/
      this.obtenruta(this.ruta,this._servicio,this.equipo);

  	}

    obtenruta(ruta2:ActivatedRoute,_servicio2:EquipoService,equipo:Array<any>)
    {
        ruta2.params.subscribe(params=>{
        console.log(params['id']);
       console.log(_servicio2.obtenerUnEquipo(params['id']));
       this.equipo=_servicio2.obtenerUnEquipo(params['id']);
      }
      )
    }

  ngOnInit() {
  }

}
