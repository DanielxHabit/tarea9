import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class servicios {
        
  constructor(private http: HttpClient){}
           
    getApiDaniel(){
      return this.http.get('https://jsonplaceholder.typicode.com/users');
    }
  
  
}