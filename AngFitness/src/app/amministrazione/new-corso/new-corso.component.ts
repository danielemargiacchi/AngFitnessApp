import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CorsiService } from '../../services/corsi.service';

@Component({
  selector: 'app-new-corso',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-corso.component.html',
  styleUrl: './new-corso.component.css'
})
export class NewCorsoComponent {
  
  private corsiService = inject(CorsiService);    // corsi service
  closeModal = output();    // event emitter per la chiusura del modale
  isFormValid: boolean = true; // booleano per la validità del form

  
  // funzioni per gestire gli errori del form nel template html
  get isNomeValid(){
    return this.form.controls.nome.touched && this.form.controls.nome.invalid
  }
  
  get isDescrizioneValid(){
    return this.form.controls.descrizione.touched && this.form.controls.descrizione.invalid
  }
  get isIstruttoreValid(){
    return this.form.controls.istruttore.touched && this.form.controls.istruttore.invalid
  }
  
  get isDurataValid(){
    return this.form.controls.durata.touched && this.form.controls.durata.invalid
  }
  
  get isCapacitaMassimaValid(){
    return this.form.controls.capacitaMassima.touched && this.form.controls.capacitaMassima.invalid
  }
  get isIscrittiValid(){
    return this.form.controls.iscritti.touched && this.form.controls.iscritti.invalid
  }
  get isImageValid(){
    return this.form.controls.image.touched && this.form.controls.image.invalid
  }

  // metodo per chiudere il modale
  onClose(){
    this.closeModal.emit()
  }

  // oggetto per gestire il form
  form = new FormGroup({
    nome: new FormControl('', {
      validators: [Validators.required]
    }),
    descrizione: new FormControl('', {
      validators: [Validators.required]
    }),
    durata: new FormControl('', {
      validators: [Validators.required]
    }),
    istruttore: new FormControl('', {
      validators: [Validators.required]
    }),
    capacitaMassima: new FormControl('', {
      validators: [Validators.required]
    }),
    iscritti: new FormControl('', {
      validators: [Validators.required]
    }),
    image: new FormControl('', {
      validators: [Validators.required]
    }),
    
  })

// metodo per gestire il submit del form
  onSubmit(){
    if (!this.form.valid) {
      this.isFormValid = false;
      return;
    }
    const corso = {
      nome: this.form.value.nome,
      descrizione: this.form.value.descrizione,
      durata: Number(this.form.value.durata),
      istruttore: this.form.value.istruttore,
      capacitaMassima: Number(this.form.value.capacitaMassima),
      iscritti: Number(this.form.value.iscritti),
      disponibilita: true,
      image: this.form.value.image
    }
    
    this.corsiService.addCorso(corso).subscribe({
      next: (res)=>{
        console.log(res);
        
      }
    })

    this.onClose()
    
  }

}
