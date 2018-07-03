import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isLoggedIn: boolean;

  constructor(
    private authService: AuthService
  ) { }


  ngOnInit() {
    this.authService.getAuth().subscribe((auth) => {
      if (auth) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }
}
