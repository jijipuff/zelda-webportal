import { Component, OnInit } from '@angular/core';
import { ClientAdminService } from '../../../../services/client-admin.service';
import { ClientService } from '../../../../services/client.service';
import { Client } from '../../../../models/Client';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  selectedFile= null;
  client: Client= null;
  clientId: string;
  clientAdminId: string;

  constructor(private clientAdminService: ClientAdminService, private clientService: ClientService, private authService: AuthService) {

    this.authService.clientAdmin.subscribe( data => {
      if (data) {
        this.clientId= data.clientId;
        this.clientAdminId= data.clientAdminId;
        this.getClient();
      }
      else { 
        console.log('Error: no clientID found'); 
      }
    });

    
   }


  ngOnInit() { }


  getClient() {
    this.clientService.getClient(this.clientId).subscribe( data => {
      if (data) {
        this.client= data;
      }
      else {
        console.log('error getting client');
      }
    });

  }

  getClientAdmins() {
    this.clientAdminService.getClientAdmin(this.clientId).subscribe
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
      //this.description= value;
      /** Upload description */
     
    }
  }



}
