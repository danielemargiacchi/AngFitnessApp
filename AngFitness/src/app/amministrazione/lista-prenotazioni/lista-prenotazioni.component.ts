import { Component, inject, OnInit, signal } from '@angular/core';
import { PrenotazioniService } from '../../services/prenotazioni.service';
import { Prenotazione } from '../../models/prenotazione.model';

@Component({
  selector: 'app-lista-prenotazioni',
  standalone: true,
  imports: [],
  templateUrl: './lista-prenotazioni.component.html',
  styleUrl: './lista-prenotazioni.component.css'
})
export class ListaPrenotazioniComponent implements OnInit {
  private prenotazioniService = inject(PrenotazioniService);    // prenotazioni service

  prenotazioni = signal<Prenotazione[]>([]);    // signal con array di prenotazioni

  // all'oninit del componente prendo le prenotazioni dal service
  ngOnInit() {
    this.prenotazioniService.getPrenotazioni()
      .subscribe({
        next: (data) => {
          console.log(data);
          this.prenotazioni.set(data);
        }
      })
  }
}
