import { Component } from '@angular/core';

let valor:string;

valor=prompt('Ingrese su nombre:','');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  nombre=valor;
}
