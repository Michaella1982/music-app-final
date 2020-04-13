import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, NavigationStart } from '@angular/router';
import { SharedService } from '../shared.service';
import { filter } from "rxjs/operators";
import { Observable } from "rxjs";




@Component({
  selector: 'app-crates',
  templateUrl: './crates.component.html',
  styleUrls: ['./crates.component.scss']
})
export class CratesComponent implements OnInit {
  albumForm: FormGroup;
  data: any;
  navStart: Observable<NavigationStart>;
  constructor(private router: Router, private sharedData: SharedService) {
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>
  }

  ngOnInit() {
    this.sharedData.currentData.subscribe(data => (this.data = data));
    this.navStart.subscribe(evt =>
      console.log("data is moving between components")
    );

  }
  changeData() {
    this.sharedData.changeData({ name: "David Bowie" });
    this.router.navigate(["show-crates"]);
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
      requestType: new FormControl(),
      text: new FormControl(),
    })
  }
}
