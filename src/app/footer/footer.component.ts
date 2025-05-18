import { Component } from '@angular/core';
import { User } from '../Models/user';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [FormsModule, CommonModule,],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  user : User = new User
  userSignUp = false

  onSubmit(): void {
    
    localStorage.setItem('USER', JSON.stringify(this.user, null, 2));
    this.userSignUp = true
   localStorage.setItem('USER_SIGNUP', JSON.stringify(this.userSignUp, null, 2));
    

  }

  onReset(form: NgForm): void {
    form.reset();
  }

}
