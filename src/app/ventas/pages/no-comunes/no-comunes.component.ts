import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Alonso';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['María', 'Alonso', 'Juan', 'Mateo', 'Andres'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: `tenemos # clientes esperando`,
  };

  cambiarCliente = () => {
    if (this.genero === 'masculino') {
      this.nombre = 'María';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Alonso';
      this.genero = 'masculino';
    }
  };
  borrarCliente = () => {
    this.clientes.pop();
  };

  // KeyValuePipe
  persona = {
    nombre: 'Alonso',
    edad: 28,
    direccion: 'Pisco, Perú',
  };

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  // AsyncPipe
  miObservable = interval(1000); //0,1,2,3,4,...

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
