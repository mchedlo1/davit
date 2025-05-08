import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getStations(){
    return this.http.get('https://railway.stepprojects.ge/api/stations')
  }
}
