import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dataSource = new BehaviorSubject({
    
  
  title: '',
  artist:'',
  yearReleased: '',
  label: '',
  genre: '',
  catalogNumber:'',
  });
  
  currentData = this.dataSource.asObservable();

  changeData(data: any) {
    this.dataSource.next(data);
    }

  constructor() { }
}
