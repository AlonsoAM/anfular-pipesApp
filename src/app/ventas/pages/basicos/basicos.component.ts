import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'alonso';
  nombreUpper: string = 'ALONSO';
  nombreCompleto: string = 'AloNSo AncHanTe';
  fecha: Date = new Date();
}
