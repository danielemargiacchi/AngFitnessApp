import { Component, inject, OnInit, signal } from '@angular/core';
import { CorsiService } from '../services/corsi.service';
import { Corso } from '../models/corso.model';
import { CorsoComponent } from '../lista-corsi/corso/corso.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CorsoComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private corsiService = inject(CorsiService);  // corsi service

  allCorsi = signal<Corso[]>([]); // signal con i 4 corsi da visualizzare nella home

  ngOnInit() {
    // carico i primi 4 corsi da visualizzare nella home
    this.corsiService.getCorsi()
      .subscribe({
        next: (data) => {
          this.allCorsi.set(data.slice(0, 4));
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}
