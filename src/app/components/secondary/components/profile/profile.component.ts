import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  companyName: string= 'Zelda';
  locations: string[]= [ 'Cape Town', ' Johannesburg'];
  industries: string= 'Engineering, Computer Science, Technology';
  description: string= 'description';


  ngOnInit() {
  }

}
