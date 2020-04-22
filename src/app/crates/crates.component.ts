  
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormsModule, NgModel, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router, NavigationStart } from '@angular/router';
import { SharedService } from "../shared.service"

@Component({
  selector: 'app-crates',
  templateUrl: './crates.component.html',
  styleUrls: ['./crates.component.scss']
})

export class CratesComponent implements OnInit {
 
  data: any;

  
  constructor(private router: Router, private sharedData: SharedService) { }
  
  ngOnInit() {
    this.sharedData.currentData.subscribe(data => this.data = data); 
    
  }
  changeData(data:any) {
  
      this.sharedData.changeData({
      
    title: 'the man who sold the world',
    artist:'davie Bowie',
    yearReleased: '1970',
    label: 'rca victor',
    genre: 'rock',
    catalogNumber:'rca-1234',});
    this.router.navigate(['show-crates']); }

}

    
