import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Stations } from '../Models/stations';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor( private api : ApiService){}

  stations : Stations[] = []
  ngOnInit(){

    this.api.getStations().subscribe((arr : any) => {
      this.stations = arr
      console.log(this.stations)
    })

  }

}
