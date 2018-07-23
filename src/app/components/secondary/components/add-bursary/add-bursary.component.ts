import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Bursary } from '../../../../models/Bursary';
import { AuthService } from '../../../../services/auth.service';
import { BursaryService } from '../../../../services/bursary.service';
import { DropdownItems } from '../../../../data-objects/dropdown-items';

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
    private router: Router
  ) {
    this.authService.clientAdmin.subscribe(data => {
      if (data) {
        this.clientId = data.clientId;
        console.log(this.clientId);
      }
    });
  }

  ngOnInit() {
    this.fieldsOptions = DropdownItems.fieldOptions;

    this.applicableFieldsOptions = DropdownItems.applicableFieldsOptions;

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
        this.router.navigate(['/bursaries']);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
}
