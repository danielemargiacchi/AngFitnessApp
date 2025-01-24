# AngFitness App

Applicazione web in Angular per la gestione delle prenotazioni di una palestra. L'applicazione permette agli utenti di visualizzare e prenotare gli allenamenti o i corsi preferiti.

---

## **Indice**
1. [Introduzione](#introduzione)
2. [Funzionalità Principali](#funzionalità-principali)
3. [Tecnologie Utilizzate](#tecnologie-utilizzate)
4. [Requisiti Tecnici](#requisiti-tecnici)
5. [Requisiti Funzionali](#requisiti-funzionali)
6. [Installazione](#installazione)
7. [Struttura del Progetto](#struttura-del-progetto)
8. [Licenza](#licenza)

---

## Introduzione

Progetto finale corso Angular - ITS ICT Piemonte.

---
## Funzionalità Principali

- **Gestione Corsi:** Visualizza l'elenco dei corsi e prenota facilmente la tua sessione preferita.
- **Sistema di Prenotazione:** Controlli automatici sulla disponibilità dei posti.
- **Area Amministrativa:** Gestisci corsi e visualizza report sulle prenotazioni.


---
## Requisiti Funzionali

### 1. Multipagina
- Creare le seguenti pagine (Home, Chi Siamo, I nostri Corsi, Amministrazione)

### 2. Gestione Corsi
- Visualizzare l'elenco dei corsi disponibili (lista o card)
- Mostrare dettagli per ogni corso: nome, descrizione, istruttore, durata, capacità massima 
Nota: è a discrezione dello studente come mostrare i dettagli del corso, nella stessa pagina in un apposito container, in un dialog, ecc. 

### 3. Sistema di Prenotazione
- Permettere agli utenti di prenotare una sessione
- Implementare controlli sulla capacità massima, al raggiungimento del numero massimo di iscritti non è più prenotabile
- Mostrare conferma della prenotazione

### 4. Area Amministrativa
- Aggiungere/eliminare corsi
- Visualizzare report sulle prenotazioni 
---

## Requisiti Tecnici

### Struttura dell'Applicazione
1. Utilizzare Angular 17+
2. Implementare il routing
3. Implementare almeno 1 service per la gestione dei corsi 
4. Implementare e gestire il form di aggiunta corsi in uno dei modi visti a lezione (template driven, reactive forms)
5. Utilizzare json-server 


### UI/UX
1. Possibilità di utilizzare Bootstrap
2. Fornire feedback visuale per le azioni dell'utente
3. Implementare form reattivi con validazione
4. La pagina Home dovrà contenere una sezione nella quale vengono mostrati 4 corsi, il resto è a discrezione dello studente
5. La pagina Chi Siamo è a discrezione dello studente


### API e Backend
1. Simulare un backend utilizzando json-server
2. Implementare chiamate HTTP utilizzando HttpClient
3. Gestire gli errori in modo appropriato
---


## Tecnologie Utilizzate

- **Angular**: Versione 18.2.12
- **TypeScript**: Versione 5.6.3
- **Node.js**: Versione 22.11.0
- **Node Package Manager**: Versione 10.9.0
- **json-server**: Versione 1.0.0-beta.3

---

## Installazione

```bash
# 1. Clona il repository
git clone https://github.com/danielemargiacchi/AngFitnessApp

# 2. Nella directory del backend e avvia il server
json-server --watch db.json -s ./images

# 3. Nella directory del progetto installa le dipendenze
npm install

# 4. Avvia il server di sviluppo
ng serve
```

Accedi al progetto su `http://localhost:4200`.

---

## Struttura del Progetto

**Backend**

```
AngFitnessBackend/
│
├── public/                 
│   ├── images/             # Immagini dei corsi
│
├── db.json/                # Databse con corsi e prenotazioni
```

**App**

```
src/
│
├── app/                 
│   ├── amministrazione/                # Amministrazione component
|       ├── lista-prenotazioni/         # Lista prenotazioni component
|       ├── new-corso/                  # New corso component
│   ├── chi-siamo/                      # Chi siamo component
│   ├── corsi/                          # Corsi component
│   ├── home/                           # Home component
│   ├── lista-corsi/                    # Lista corsi component
|       ├── corso/                      # Corso component
|       ├── prenota/                    # Prenota component
│   ├── models/                         # Modelli dei dati
│   ├── navbar/                         # Navbar component
│   ├── services/                       # Services
│
public/                                 # Immagini e logo

```


**Routes**

Questa applicazione utilizza il modulo `@angular/router` per gestire la navigazione tra le diverse pagine: 

| Percorso         | Componente associato          | Descrizione                                                                 |
|------------------|-------------------------------|-----------------------------------------------------------------------------|
| `/`              | `HomeComponent`              | Pagina principale dell'applicazione.                                       |
| `/chi-siamo`     | `ChiSiamoComponent`          | Pagina che fornisce informazioni su chi siamo.                             |
| `/corsi`         | `CorsiComponent`             | Pagina dedicata alla visualizzazione e prenotazione dei corsi .            |
| `/amministrazione` | `AmministrazioneComponent` | Sezione per la gestione amministrativa dei corsi e prenotazioni.           |


---

## Licenza

Questo progetto è distribuito sotto licenza MIT. 

---

## Author
Margiacchi Daniele