import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  selectedFile= null;

  constructor() { }

  companyName: string= 'Zelda';
  locations: string[]= [ 'Cape Town', ' Johannesburg'];
  industries: string= 'Engineering, Computer Science, Technology';
  description: string= 'description';


  ngOnInit() {
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile= event.target.files[0];
  }

  onUpload() {
    /** Figure out how to upload photo to FireStore */
  }

  onSubmit({value, valid}: {value: string, valid: boolean}) {
    if (!valid) {
      console.log('Form not valid');
    } else {
      console.log (value);  
      this.description= value;
      /** Upload description */
     
    }
  }

}
