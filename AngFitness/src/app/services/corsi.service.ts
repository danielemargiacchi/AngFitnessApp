import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Corso } from '../models/corso.model';

@Injectable({
  providedIn: 'root'
})
export class CorsiService {
  private httpClient = inject(HttpClient);    // http client 
  private corsi = signal<Corso[]>([]);    // signal privato che contiene i corsi

  loadedCorsi = this.corsi.asReadonly();    // proprietà che restituisce in output il valore del signal privato dei corsi


  // metodo per ottenere i corsi
  getCorsi() {
    return this.httpClient.get<Corso[]>('http://localhost:3000/corsi')
  }
  // metodo per ottenere un corso dato l'id
  getCorsoById(id: string) {
    return this.httpClient.get<Corso>(`http://localhost:3000/corsi/${id}`)
  }

  // metodo per caricare i corsi nel signal
  loadCorsi() {
    this.getCorsi()
      .subscribe({
        next: (data) => {
          this.corsi.set(data);
        }
      })
  }

  // metodo per eliminare un corso dato l'id 
  deleteCorso(id: string) {
    // aggiorno il signal
    this.corsi.update(
      corso => corso.filter(u => u.id !== id)
    )
    return this.httpClient.delete(`http://localhost:3000/corsi/${id}`)
  }

  // metodo per aggiungere un corso
  addCorso(corso: any) {
    // aggiorno il signal
    this.corsi.update(corsi => [...corsi, corso]);
    return this.httpClient.post('http://localhost:3000/corsi', corso)
  }

  // metodo per aggiornare iscritti e disponibilità di un corso
  updateIscritti(id: string, iscritti: any) {
    return this.httpClient.patch(`http://localhost:3000/corsi/${id}`, iscritti)
  }


}
