import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AmministrazioneComponent } from './amministrazione/amministrazione.component';
import { CorsiComponent } from './corsi/corsi.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'chi-siamo',
        component: ChiSiamoComponent
    },
    {
        path:'corsi',
        component: CorsiComponent
    },
    {
        path:'amministrazione',
        component: AmministrazioneComponent
    },
];
