import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  enMayuscula: boolean = false;
  products: string[] = [];

  toggleMayuscula = () => (this.enMayuscula = !this.enMayuscula);
}
