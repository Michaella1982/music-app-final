import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SharedService } from "../shared.service";

@Component({
  selector: 'show-crates',
  templateUrl: './show-crates.component.html',
  styleUrls: ['./show-crates.component.scss']
})
export class ShowCratesComponent implements OnInit {
  data:any;

  constructor(private router:Router) { }

  ngOnInit() {



    
  }

  
  changePage() {
    
    this.router.navigate(["crates"]);
  }



  

}
