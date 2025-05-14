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

}
