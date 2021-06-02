import { ElementRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    this.txtBuscar.nativeElement.value = '';
  }
}
