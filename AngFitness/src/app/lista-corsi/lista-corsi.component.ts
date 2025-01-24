import { Component, inject, OnInit, signal } from '@angular/core';
import { CorsiService } from '../services/corsi.service';
import { Corso } from '../models/corso.model';
import { CorsoComponent } from './corso/corso.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-corsi',
  standalone: true,
  imports: [CorsoComponent],
  templateUrl: './lista-corsi.component.html',
  styleUrl: './lista-corsi.component.css'
})
export class ListaCorsiComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }  // proprietà per verificare il path

  routePath: string = '';   // proprietà con il path dell'URL

  private corsiService = inject(CorsiService);    // corsi service

  corsi = this.corsiService.loadedCorsi;    // array di corsi caricati dal service

  // carico i corsi al render del componente
  ngOnInit(): void {
    this.corsiService.loadCorsi()

  }


}
