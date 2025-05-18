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

  price ? : number
  totalPrice ?: number
  vagon : Vagons = new Vagons
  chosenSeats : Seats[] = []
  

  ngOnInit(){
    this.api.getVagon(this.id).subscribe((resp : any) => {
      this.vagon = resp[0]
      console.log(this.vagon)
      if(this.vagon.seats){
        this.price =this.vagon.seats[0].price
      }
      else{
        console.log("error")
      }
    })
    
    
  }

  userSignUp ?: string

  ok(){
    console.log(this.chosenSeats)
    if(localStorage.getItem('USER_SIGNUP')){
      console.log("ok")
    }
    else{
      console.log("Please sign up first")
    }
   // if(localStorage.getItem('USER_SIGNUP') == "true"){
      //localStorage.setItem('SEATS', JSON.stringify(this.chosenSeats, null, 2));
      //localStorage.setItem('VAGON', JSON.stringify(this.vagon, null, 2));
      // this.api.postSeats(this.chosenSeats).subscribe((resp : any) => {
      //   console.log(resp)
      // })
     // console.log("ax")
   // }
   // else{
    //  console.log("Please sign up first")
   // }
    if(this.price){
      this.totalPrice = this.price*this.chosenSeats.length
      console.log(this.totalPrice)
       console.log(this.price)
      }
    else{
      console.log("error")
      console.log(this.price)
    }
  }


}
