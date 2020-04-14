import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//adding default values

export class defaultAlbum{
title= ' the Man Who Sold the World'
artist= 'David Bowie'
label= 'RCA Victor'
genre= 'Rock'
yearReleased:'1972'
catalogNumber: 'LSP-4816'
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {
private dataSource = new BehaviorSubject({
title:'',
artist: '',
label: '',
genre: '',
yearReleased: '',
catalogNumber: '',
});
currentData = this.dataSource.asObservable(); 

constructor() { }

onSubmit(data: any) {
this.dataSource.next(data);
}
}
