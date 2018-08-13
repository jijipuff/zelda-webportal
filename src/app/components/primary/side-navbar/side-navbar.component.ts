import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  loggedInUser: string;

  firstName: string;
  lastName: string;
  clientId: string;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe((auth) => {
      if (auth) {
        this.loggedInUser = auth.email;
      }
    });

    this.authService.clientAdmin.subscribe (data => {
      if (data) {
        this.clientId= data.clientId;
        this.firstName= data.firstName;
        this.lastName= data.lastName;
      }
    })
  }
}
