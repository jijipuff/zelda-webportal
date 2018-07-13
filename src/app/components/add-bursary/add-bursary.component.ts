import { Component, OnInit, ViewChild } from '@angular/core';
import { Bursary } from '../../models/Bursary';
import { DatePicker } from 'angular2-datetimepicker';
import { BursaryService } from '../../services/bursary.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-bursary',
  templateUrl: './add-bursary.component.html',
  styleUrls: ['./add-bursary.component.css']
})
export class AddBursaryComponent implements OnInit {
  @ViewChild('bursaryForm') form: any;

  bursary: Bursary = {
    title: 'tiro',
    bursaryUrl: 'linkedIn',
    fields: [],
    applicableFields: [],
    description: '<p>This is a decription. This is&nbsp;<strong>Bold</strong>&nbsp;text:</p>',
    applicationProcess: '<p>This is a decription. This is&nbsp;<strong>Bold</strong>&nbsp;text:</p>',
    supportProvided: '<p>This is a decription. This is&nbsp;<strong>Bold</strong>&nbsp;text:</p>',
    requirements: '<p>This is a decription. This is&nbsp;<strong>Bold</strong>&nbsp;text:</p>',
    closingDate: new Date(),
    clientId: ''
  };

  fieldsOptions = [];
  applicableFieldsOptions = [];
  dropdownSettings = {};

  constructor(
    private bursaryService: BursaryService
  ) {
    // hack to fix the DatePicker getMonth Html Error
    DatePicker.prototype.ngOnInit = function () {
      this.settings = Object.assign(this.defaultSettings, this.settings);
      if (this.settings.defaultOpen) {
        this.popover = true;
      }
      this.date = new Date();
    };
  }

  ngOnInit() {
    this.fieldsOptions = [
      { 'id': 1, 'itemName': 'Science' },
      { 'id': 2, 'itemName': 'Enginnering' },
      { 'id': 3, 'itemName': 'Mathematics' }
    ];

    this.applicableFieldsOptions = [
      { 'id': 1, 'itemName': 'Systems Engineering' },
      { 'id': 2, 'itemName': 'Software Engineering' },
      { 'id': 3, 'itemName': 'Data Science' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'custom-class-example'
    };
  }

  onSubmit({value, valid}: {value: Bursary, valid: boolean}) {
    if (!valid) {
      console.log('Form not valid');
    } else {
      value.fields = value.fields.map((a: any) => a.itemName.toString());
      value.applicableFields = value.applicableFields.map((b: any) => b.itemName.toString());
      // console.log(value);
      this.bursaryService.addBursary(value);
    }
  }

}
