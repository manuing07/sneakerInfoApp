import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SneakersReponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SneakersService {

  constructor(private http:HttpClient) { }


  getSneakersInfo(){
   return this.http.get<SneakersReponse>('https://backend-sneakers.herokuapp.com/sneaker')
  }
}
