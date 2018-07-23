import { Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Bursary } from '../../../../models/Bursary';
import { BursaryService } from '../../../../services/bursary.service';
import { DropdownItems } from '../../../../data-objects/dropdown-items';

@Component({
  selector: 'app-edit-bursary',
  templateUrl: './edit-bursary.component.html',
  styleUrls: ['./edit-bursary.component.css']
})
export class EditBursaryComponent implements OnInit {
  @ViewChild('bursaryForm') form: any;
  bursaryId: string;
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

  selectedFields = [];
  selectedApplicableFields = [];
  dropdownSettings = {};

  fieldsOptions = [];
  applicableFieldsOptions = [];

  constructor(
    private bursaryService: BursaryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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

    this.bursaryId = this.route.snapshot.params['id'];
    this.bursaryService.getBursary(this.bursaryId).subscribe(data => {
      if (data != null) {
        this.bursary = data;

        const bar = <any>data.closingDate;
        this.bursary.closingDate = bar.toDate();

        let i: number = 1;
        let fieldObject = {};
        (this.bursary.fields).forEach(field => {
          fieldObject = {
            'id' : i,
            'itemName': field
          };
          JSON.stringify(fieldObject);
          this.selectedFields.push(fieldObject);
          i++;
        });

        let j: number = 1;
        let applicableFieldObject = {};
        (this.bursary.applicableFields).forEach(applicableField => {
          applicableFieldObject = {
            'id': j,
            'itemName': applicableField
          };
          JSON.stringify(applicableFieldObject);
          this.selectedApplicableFields.push(applicableFieldObject);
          j++;
        });

      } else {
        console.log('error loading bursary');
      }
    });

  }

  onSubmit({ value, valid }: { value: Bursary, valid: boolean }) {
    if (!valid) {
      console.log('form not valid');
    } else {
      value.fields = this.selectedFields.map((a: any) => a.itemName.toString());
      value.applicableFields = this.selectedApplicableFields.map((a: any) => a.itemName.toString());
      value.bursaryId = this.bursaryId;
      this.bursaryService.updateBursary(value)
      .then(res => {
        console.log('success');
        this.router.navigate([`/bursary/${this.bursaryId}`]);
      })
      .catch(err => {
        console.log(err.message);
      });

      console.log(value);

    }
  }

}
