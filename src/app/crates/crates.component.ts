import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, NavigationStart } from '@angular/router';
import { SharedService } from '../shared.service';
import { filter } from "rxjs/operators";
import { Observable } from "rxjs"; 
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-crates',
  templateUrl: './crates.component.html',
  styleUrls: ['./crates.component.scss']
})
export class CratesComponent implements OnInit {
  AlbumForm: FormGroup;
  data: any;
  
  submitted = false;
  navStart: Observable<NavigationStart>;
  constructor(private router: Router, private sharedData: SharedService) {
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>
  }

  ngOnInit() {
    this.sharedData.currentData.subscribe(data => (this.data = data));
    this.navStart.subscribe(evt =>
      console.log("Sweeeeet! Data is being passed")
    );

  }
  createFormGroup() {
    this.AlbumForm= new FormGroup({
        title: new FormControl(),
        artist: new FormControl(),
        label: new FormControl(),
        genre: new FormControl(),
        yearReleased: new FormControl(),
        catalogNumber: new FormControl(),
      })
  }

  onSubmit(form:NgForm) {
    console.log(form);
  }
}


      