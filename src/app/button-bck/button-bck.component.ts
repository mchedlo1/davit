import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-bck',
  imports: [],
  templateUrl: './button-bck.component.html',
  styleUrl: './button-bck.component.scss'
})
export class ButtonBckComponent {

  @Input() text ?: string

}
