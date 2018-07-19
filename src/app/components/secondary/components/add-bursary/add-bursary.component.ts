import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
// import { CKEDITOR } from 'ng2-ckeditor/ng2-ckeditor';
import { Bursary } from '../../../../models/Bursary';
import { AuthService } from '../../../../services/auth.service';
import { BursaryService } from '../../../../services/bursary.service';

@Component({
  selector: 'app-add-bursary',
  templateUrl: './add-bursary.component.html',
  styleUrls: ['./add-bursary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBursaryComponent implements OnInit {
  @ViewChild('bursaryForm') form: any;

  bursary: Bursary = {
    title: '',
    bursaryUrl: '',
    fields: [],
    applicableFields: [],
    description: '',
    applicationProcess: '',
    supportProvided: '',
    requirements: '',
    closingDate: new Date(),
    clientId: ''
  };

  fieldsOptions = [];
  applicableFieldsOptions = [];
  dropdownSettings = {};

  clientId: string;

  constructor(
    private bursaryService: BursaryService,
    private authService: AuthService,
  ) {
    this.authService.clientAdmin.subscribe(data => {
      if (data) {
        this.clientId = data.clientId;
        console.log(this.clientId);
      }
    });
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
      value.clientId = this.clientId;

      this.bursaryService.addBursary(value)
      .then(res => {
        console.log(res);
        this.bursary = {
          title: '',
          bursaryUrl: '',
          fields: [],
          applicableFields: [],
          description: '',
          applicationProcess: '',
          supportProvided: '',
          requirements: '',
          closingDate: new Date(),
          clientId: ''
        };
        // for (const name of CKEDITOR.instances) {
        //   CKEDITOR.instances[name].destroy(true);
        // }
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
}
