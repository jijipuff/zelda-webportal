import { Component, OnInit } from '@angular/core';
import { Applicant } from '../../../../models/Applicant';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  gender: string;
  matriculationYear: string;
  race: string;
  applicationStatus: string;
  annualIncome: string;
  marks: string;

  searchResults: Array<Applicant>= [];

  showresults: boolean;

  constructor() { }

  ngOnInit() {
    this.gender= 'Select Gender';
    this.matriculationYear= 'Select Year';
    this.race= 'Select Race';
    this.applicationStatus= 'Select Status';
    this.annualIncome= 'Select Income';
    this.marks= 'Select Marks';
    this.showresults= false;
  }

  showResults(): void {
    this.showresults= true;
  }

  reset(): void {
    this.showresults= false;
  }

}
