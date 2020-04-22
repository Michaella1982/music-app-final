import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root'


})

export class ApiService {

  constructor(private httpClient: HttpClient) { }

  API_KEY = 'svaHXUsQ5SVsY65BoL0PYsXZGlT7NgaRtA59BtcpmI7xHjoeXkx56E5aXdW9rzyN';

  public getMap(){

    return this.httpClient.get(`https://www.zipcodeapi.com/rest/<api_key>/info.<format>/<zip_code>/<units>=${this.API_KEY}`);
  
  }
    

}
