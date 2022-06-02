import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {

  heroes:string[] = ['spiderman', 'Mazinger Z', 'Tor','king kong','mozart'];


  borrar(){
    this.heroes.pop();
  }

}
