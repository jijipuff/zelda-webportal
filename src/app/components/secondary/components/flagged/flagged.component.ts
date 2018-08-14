import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { FlaggedService } from '../../../../services/flagged.service';

@Component({
  selector: 'app-flagged',
  templateUrl: './flagged.component.html',
  styleUrls: ['./flagged.component.css']
})
export class FlaggedComponent implements OnInit {

  dashboard :DashboardComponent 

  flaggedService: FlaggedService = new FlaggedService();

  constructor() { }

  ngOnInit() { 


    console.log(this.flaggedService.getAll());

    this.flaggedService.clear();

  }

  

  
}