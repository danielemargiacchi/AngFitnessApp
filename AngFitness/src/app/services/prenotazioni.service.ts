import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Prenotazione } from '../models/prenotazione.model';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {
  private httpClient = inject(HttpClient);  // http client

  // metodo per ottenere le prenotazioni
  getPrenotazioni() {
    return this.httpClient.get<Prenotazione[]>('http://localhost:3000/prenotazioni')
  }

  // metodo per elimianre una prenotazione per id 
  deletePrenotazione(id: string) {
    return this.httpClient.delete(`http://localhost:3000/prenotazioni/${id}`)
  }

  // metodo per aggiungere una prenotazione 
  addPrenotazione(prenotazione: any) {
    return this.httpClient.post('http://localhost:3000/prenotazioni', prenotazione)
  }



}
