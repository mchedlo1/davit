import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Stations } from '../Models/stations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
      console.log(this.stations)
    })

  }

  stationsFromTo : string[] = [
    "თბილისი",
    "ბათუმი",
    "ფოთი"
  ]

  from = ""
  to = ""
  date = ""

  filter(){
    console.log(this.to)
    console.log(this.from)
    console.log(this.date)
  }


}
