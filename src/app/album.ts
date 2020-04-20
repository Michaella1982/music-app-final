export class Album{
    title:string;
    artist:string;
    yearReleased:number;
    genre: string;
    label:string;
    catalogNumber: string;

    constructor(
        title:string,
        artist:string,
        yearReleased:number,
        genre: string,
        label:string,
        catalogNumber: string,){
            this.title = title;
            this.artist = artist;
            this.yearReleased = yearReleased;
            this.genre = genre;
            this.label = label;
            this.catalogNumber = catalogNumber;
    }
}