import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Corso } from '../../models/corso.model';
import { ActivatedRoute } from '@angular/router';
import { CorsiService } from '../../services/corsi.service';
import { PrenotaComponent } from '../prenota/prenota.component';

// funzione per bloccare lo scroll della pagina 
const bloccaScroll = () => {
  document.body.style.overflow = 'hidden';
}

// funzione per sbloccare lo scroll della pagina 
const sbloccaScroll = () => {
  document.body.style.overflow = '';
}
@Component({
  selector: 'app-corso',
  standalone: true,
  imports: [PrenotaComponent],
  templateUrl: './corso.component.html',
  styleUrl: './corso.component.css'
})
export class CorsoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }    // proprietà per verificare il path

  routePath: string = '';   // proprietà con il path dell'URL

  corso = input.required<Corso>();    // corso in input 
  private corsiService = inject(CorsiService);    // corsi service

  isPrenotaCorso: boolean = false;   // booleano per l'apertura del modale di prenotazione

  // metodo all'OnInit per prendere il path
  ngOnInit() {
    this.routePath = this.activatedRoute.snapshot.url.map(segment => segment.path).join('/');
  }

  // metodo che restituisce il path
  checkPath() {
    return this.routePath;
  }

  // metodo per gestire l'eliminazione del corso
  onDeleteCorso() {
    this.corsiService.deleteCorso(this.corso().id).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }


  // metodo per aprire il modale di prenotazione
  onPrenotaCorso() {
    this.isPrenotaCorso = true;
    bloccaScroll();
  }

  // metodo per chiudere il modale di prenotazione
  onClosedModal() {
    this.isPrenotaCorso = false;
    sbloccaScroll();
  }


}
