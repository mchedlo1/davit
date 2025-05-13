import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Stations } from '../Models/stations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DepartureTrains } from '../Models/departure';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor( private api : ApiService){}

  stations : Stations[] = []
  ngOnInit(){

    this.api.getStations().subscribe((arr : any) => {
      this.stations = arr
      // console.log(this.stations)
    })

  }

  from = ""
  to = ""
  date = ""

  departureTrains : DepartureTrains = new DepartureTrains
  filter(){
    console.log(this.to)
    console.log(this.from)
    console.log(this.date)
    this.api.getDeparture(this.from, this.to, this.date).subscribe((deptArr : any) => {
      this.departureTrains = deptArr[0]
      console.log(this.departureTrains)
    })
  }


}
