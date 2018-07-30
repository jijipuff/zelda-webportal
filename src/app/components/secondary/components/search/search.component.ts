import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.gender= 'Select Gender';
    this.matriculationYear= 'Select Year';
    this.race= 'Select Race';
    this.applicationStatus= 'Select Status';
    this.annualIncome= 'Select Income';
    this.marks= 'Select Marks';
  }


  setGender(gender: string): void {
    this.gender= gender;
    console.log("gender is "+ this.gender);
  }

  showVars() : void {
    console.log(this.gender);
    console.log(this.matriculationYear);
    console.log(this.race);
  }

}
