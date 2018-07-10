import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  clientId: string;

  constructor(
    private authService: AuthService,
    private flashMessages: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe((auth) => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit() {
    this.authService.register(this.email, this.password)
    .then((res) => {
      // this.flashMessages.show('You are registered', {
      //   cssClass: 'alert-success', timeout: 3000
      // });
      console.log(res);
      this.authService.addClientIdOnRegistration(res, this.clientId);
      this.router.navigate(['/']);
    })
    .catch((err) => {
      // this.flashMessages.show(err.message, {
      //   cssClass: 'alert-danger', timeout: 3000
      // });
      console.log(err.message);
    });
  }
}
