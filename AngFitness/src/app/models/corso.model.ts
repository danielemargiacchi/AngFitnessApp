export interface Corso {
    id: string,
    nome: string,
    descrizione: string,
    durata: number,
    istruttore: string,
    capacitaMassima: number,
    iscritti: number,
    disponibilita: boolean,
    image: string
}