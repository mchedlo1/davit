import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { Vagons } from '../Models/vagon';
import { CommonModule } from '@angular/common';
import { SeatComponent } from "../seat/seat.component";
import { ButtonBckComponent } from "../button-bck/button-bck.component";
import { Seats } from '../Models/seat';
@Component({
  selector: 'app-vagons',
  imports: [RouterModule, CommonModule, SeatComponent, ButtonBckComponent],
  templateUrl: './vagons.component.html',
  styleUrl: './vagons.component.scss'
})

export class VagonsComponent {

  id !: number

  constructor(private route : ActivatedRoute, private api : ApiService){
    this.route.params.subscribe(ramp => this.id = ramp['id'])
    //console.log(this.id)
  }


  vagon : Vagons = new Vagons
  chosenSeats : Seats[] = []
  

  ngOnInit(){
    this.api.getVagon(this.id).subscribe((resp : any) => {
      this.vagon = resp[0]
      console.log(this.vagon)
      
    })
  }

  ok(){
    console.log(this.chosenSeats)
  }


}
