import { Component } from '@angular/core';
import { ListaCorsiComponent } from "../lista-corsi/lista-corsi.component";

@Component({
  selector: 'app-corsi',
  standalone: true,
  imports: [ListaCorsiComponent],
  templateUrl: './corsi.component.html',
  styleUrl: './corsi.component.css'
})
export class CorsiComponent {

}
