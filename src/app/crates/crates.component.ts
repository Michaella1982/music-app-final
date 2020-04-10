import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-crates',
  templateUrl: './crates.component.html',
  styleUrls: ['./crates.component.scss']
})
export class CratesComponent implements OnInit {
  albumForm: FormGroup; 
  
  constructor() { 
    this.albumForm = this.createFormGroup();
  }

  ngOnInit() {}
  
  createFormGroup() {
     return new FormGroup({
        AlbumData: new FormGroup({
          title: new FormControl(),
          artist: new FormControl(),
          label: new FormControl(),
          genre: new FormControl(),
          yearReleased: new FormControl(),
          catalogNumber: new FormControl(),
      }),
      text: new FormControl(),
      })
    }
  }
 