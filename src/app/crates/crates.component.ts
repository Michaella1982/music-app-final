import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, NavigationStart } from '@angular/router';
//import { ApiService } from '../api.service';

import { filter } from "rxjs/operators";
import { Observable } from "rxjs"; 
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-crates',
  templateUrl: './crates.component.html',
  styleUrls: ['./crates.component.scss']
})

export class CratesComponent implements OnInit {
  albumForm: FormGroup;
  title= '';
  aritist= '';
  yearReleased: number = null;
  label = '';
  genre = '';
  catalogNumber = '';
  isLoadingResults = false;
  url= "http://httpbin.com/post";
  json:any;


  constructor(private http: HttpClient){
    this.http.post(this.url, this.albumForm).toPromise().then((data:any)=> {
      console.log(data);
      this.json = JSON.stringify(data.json);
  });

  }
  
  ngOnInit() {
    }
  onSubmit(){
    if(this.albumForm.valid){
      console.log("success! Form Submitted!");
    }this.albumForm.reset();
  }
 // onFormSubmit(){
  //  this.isLoadingResults = true;
    //this.api.addAlbum(this.albumForm.value)
      //.subscribe ((res:any) => {
       // const id = res._id;
       // this.isLoadingResults= false;
      //  this.router.navigate(['/show-crates']);
      //}, (err: any) => {
      //  console.log (err);
      //  this.isLoadingResults = false;

     // });

}
  




      