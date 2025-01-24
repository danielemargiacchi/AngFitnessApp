import { Component } from '@angular/core';
import { ListaCorsiComponent } from '../lista-corsi/lista-corsi.component';
import { NewCorsoComponent } from './new-corso/new-corso.component';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';
import { RouterLink } from '@angular/router';


// funzione per bloccare lo scroll della pagina 
const bloccaScroll = () => {
  document.body.style.overflow = 'hidden';
}

// funzione per sbloccare lo scroll della pagina 
const sbloccaScroll = () => {
  document.body.style.overflow = '';
}


@Component({
  selector: 'app-amministrazione',
  standalone: true,
  imports: [ListaCorsiComponent, NewCorsoComponent, ListaPrenotazioniComponent],
  templateUrl: './amministrazione.component.html',
  styleUrl: './amministrazione.component.css'
})
export class AmministrazioneComponent {

  isAddingCorso: boolean = false;   // booleano per gestire il modale

  // metodo per gestire l'apertura del modale
  onAddCorso() {
    this.isAddingCorso = true;
    bloccaScroll();
  }

  // metodo per gestire la chiusura del modale
  onClosedModal() {
    this.isAddingCorso = false;
    sbloccaScroll();
  }
}
