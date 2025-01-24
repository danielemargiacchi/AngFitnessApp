import { Component, inject, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CorsiService } from '../../services/corsi.service';
import { Corso } from '../../models/corso.model';
import { PrenotazioniService } from '../../services/prenotazioni.service';

@Component({
  selector: 'app-prenota',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './prenota.component.html',
  styleUrl: './prenota.component.css'
})
export class PrenotaComponent {
  closeModal = output();    // event emitter per la chiusura del modale
  corso = input.required<Corso>()   // input signal del corso

  private corsiService = inject(CorsiService);    // corsi service

  private prenotazioniServie = inject(PrenotazioniService);   // prenotazioni service

  isFormValid: boolean = true;    // booleano per la validità del form

  // metodo per la chiusura del modale
  onClose() {
    this.closeModal.emit()
  }
  // funzioni per la validità delle prenotazioni nel template html
  get isNomeValid() {
    return this.form.controls.nome.touched && this.form.controls.nome.invalid
  }

  get isCognomeValid() {
    return this.form.controls.cognome.touched && this.form.controls.cognome.invalid
  }

  get isEmailValid() {
    return this.form.controls.email.touched && this.form.controls.email.invalid
  }

  get isTelefonoValid() {
    return this.form.controls.telefono.touched && this.form.controls.telefono.invalid
  }

  // oggetto per gestire il form
  form = new FormGroup({
    nome: new FormControl('', {
      validators: [Validators.required]
    }),
    cognome: new FormControl('', {
      validators: [Validators.required]
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    telefono: new FormControl('', {
      validators: [Validators.required, Validators.minLength(10)]
    })

  })

  // metodo per gestire il submit del form
  onSubmit() {
    if (this.form.invalid) {
      this.isFormValid = false;
      return
    }

    // oggetto prenotazione
    const prenotazione = {
      nome: this.form.value.nome,
      cognome: this.form.value.cognome,
      email: this.form.value.email,
      telefono: this.form.value.telefono,
      corso: this.corso().nome
    }

    // ottengo il corso che si vuole prenotare
    this.corsiService.getCorsoById(this.corso().id)
      .subscribe({
        next: (data) => {
          // verifico se ci sono ancora posti
          if (data.iscritti < data.capacitaMassima) {
            // se ci sono ancora posti aggiorno gli iscritti e la disponibilità del corso
            this.corsiService.updateIscritti(this.corso().id, { iscritti: data.iscritti + 1, disponibilita: data.iscritti + 1 === data.capacitaMassima ? false : true }).subscribe({
              next: (res) => {
                console.log(res);

              }
            })
            // aggiungo la prenotazione alle prenotazioni
            this.prenotazioniServie.addPrenotazione(prenotazione).subscribe({
              next: (res) => {
                console.log(res);
              }
            })
          }
        }
      })

    this.onClose()



  }
}
