import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private flashMessages: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    // get the authentication state of the user
    this.authService.getAuth().subscribe((auth) => {
      // if authenticated (logged in) then go home
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }

  // on submitting the login form
  onSubmit() {
    this.authService.login(this.email, this.password)
    .then((res) => {
      // send success message when logged in
      // this.flashMessages.show('You are logged in.', {
      //   cssClass: 'alert-success', timeout: 3000
      // });
      // take the user to the homepage
      console.log('success');
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
