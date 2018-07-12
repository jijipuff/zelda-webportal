import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-bursary',
  templateUrl: './add-bursary.component.html',
  styleUrls: ['./add-bursary.component.css']
})
export class AddBursaryComponent implements OnInit {
  ckeditorContent: string = '<p>Some html</p>';

  closingDate: Date = new Date();

  fields = [];
  applicableFields = [];

  selectedFields = [];
  selectedApplicableFields = [];

  dropdownSettings = {};

  constructor() { }

  ngOnInit() {
    this.fields = [
      { 'id': 1, 'itemName': 'Science' },
      { 'id': 2, 'itemName': 'Enginnering' },
      { 'id': 3, 'itemName': 'Mathematics' }
    ];

    this.selectedFields = [
      { 'id': 1, 'itemName': 'Science' }
    ];

    this.applicableFields = [
      { 'id': 1, 'itemName': 'Systems Engineering' },
      { 'id': 2, 'itemName': 'Software Engineering' },
      { 'id': 3, 'itemName': 'Data Science' }
    ];

    this.selectedFields = [
    ];

    this.selectedApplicableFields = [
    ];

    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'custom-class-example'
    };

    // this.datepickerSettings = {
    //   bigBanner: true,
    //   timePicker: true,
    //   format: 'dd-MM-yyyy',
    //   defaultOpen: true
    // };

  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedFields);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedFields);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }

}
