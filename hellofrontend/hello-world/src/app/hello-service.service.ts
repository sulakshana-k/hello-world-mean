import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// This is the port number on which nodejs is listening.
const baseUrl = 'http://localhost:3001/';

@Injectable({
  providedIn: 'root'
})
export class HelloServiceService 
{
  constructor( private http: HttpClient ) { }

  create( data: {} ) 
  {
    console.log("data:", data)
    return this.http.post(baseUrl, data);
  }

}
