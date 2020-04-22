import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-credits-contact-me',
  templateUrl: './credits-contact-me.component.html',
  styleUrls: ['./credits-contact-me.component.scss']
})
export class CreditsContactMeComponent implements OnInit {
  Maps: any;

  constructor(private apiService: ApiService) { 


  
}
  ngOnInit(): void {
     this.apiService.getMap().subscribe((data: { [x: string]: any; })=>{
      this.Maps = data['maps'];
    });
  }

} 
