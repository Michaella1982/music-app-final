import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { SharedService } from "../shared.service";

import { Router, NavigationStart } from "@angular/router";

import { filter } from "rxjs/operators";

import { Observable } from "rxjs";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crates',
  templateUrl: './crates.component.html',
  styleUrls: ['./crates.component.scss']
})
export class CratesComponent implements OnInit {
  albumForm: FormGroup; 
  submitted= false;
  data: any;
  formBuilder: any;
  
  constructor(private router: Router, private sharedData: SharedService, formBuilder: FormBuilder) { 
    this.albumForm = this.createFormGroup();
  }

  ngOnInit() {
    //this.albumForm = this.formBuilder.group({
      //      title: ['', Validators.required],
        //    artist: ['', Validators.required],
          //  label: ['', Validators.required],
            //genre: ['', [Validators.required, Validators.email]],
            //yearReleased: ['', [Validators.required, Validators.minLength(4)]],
            //catalogNumber: ['', Validators.required],
       // },
    this.sharedData.currentData.subscribe(data => this.data = data)
      }

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
    changeData() {
      this.sharedData.changeData({  
      title: '',
      artist: '',
      label: '',
      genre: '',
      yearReleased: '',
      catalogNumber: '',});
      this.router.navigate(['show-crates']); }
  }
 