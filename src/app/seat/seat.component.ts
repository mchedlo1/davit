import { Component, Input } from '@angular/core';
import { Vagons } from '../Models/vagon';
import { Seats } from '../Models/seat';

@Component({
  selector: 'app-seat',
  imports: [],
  templateUrl: './seat.component.html',
  styleUrl: './seat.component.scss'
})
export class SeatComponent {

  @Input() seat : Seats = new Seats
  @Input() chosenSeatsArr : Seats[] = []

  clickCounter1 = 1
  bck = "background-color:darkseagreen;"
  printSeat(el ?: string){

    this.clickCounter1++
    if(this.clickCounter1 % 2 == 0){
    //console.log(el, "ADDED")
    this.bck = "background-color: white;"
    this.chosenSeatsArr.push(this.seat)
    //console.log(this.chosenSeatsArr)

    }
    else if(this.clickCounter1 % 2 == 1){
      //console.log(el ,"REMOVED")
      this.bck = "background-color:darkseagreen;"
      this.chosenSeatsArr.splice(this.chosenSeatsArr.indexOf(this.seat), 1)
      //console.log(this.chosenSeatsArr)

    }
    localStorage.setItem('selectedSeats', JSON.stringify(this.chosenSeatsArr))

  }

}
