import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, NavigationStart } from '@angular/router';

import { filter } from "rxjs/operators";
import { Observable } from "rxjs"; 
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-crates',
  templateUrl: './crates.component.html',
  styleUrls: ['./crates.component.scss']
})

export class CratesComponent implements OnInit {

  albumData= {
    test:"my content",
    title:"The Man Who Sold the World",
    artist:"David Bowie",
    label:"rca Victrola",
    genre:"rock",
    yearReleased:"1972",
    catalogNumber:"RCA-3266"
  };
   url= "http://httpbin.com/post";
   json;
  constructor(private http: HttpClient){
    this.http.post(this.url, this.albumData).toPromise().then((data:any)=> {
      console.log(data);
      this.json = JSON.stringify(data.json);
  });

  }
  
  ngOnInit() {
    
    }
  }




      