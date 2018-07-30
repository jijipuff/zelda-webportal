import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  bursaryinfo: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.clientAdmin.subscribe(auth => {
      if (auth) {
        if (localStorage.getItem('clientId') == null || localStorage.getItem('clientId') !== auth.clientId) {
          localStorage.setItem('clientId', auth.clientId);
        }
      }
    });
  }
}
