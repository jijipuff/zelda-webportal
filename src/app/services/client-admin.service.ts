import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { ClientAdmin } from '../models/ClientAdmin';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientAdminService {
  clientAdminDocument: AngularFirestoreDocument<ClientAdmin>;
  clientAdminCollection: AngularFirestoreCollection;
  clientAdmin: Observable<ClientAdmin>;
  clientAdmins: Observable<ClientAdmin[]>;
  
  clientId: string;


  constructor(private afs: AngularFirestore) { 
    if (localStorage.getItem('clientId') != null) {
      this.clientId = localStorage.getItem('clientId');
      this.clientAdminCollection = this.afs.collection('ClientsAdmins', ref => ref.where('clientId', '==', this.clientId));
    }
  }

  getClientAdmin(id: string): Observable<ClientAdmin> {
    this.clientAdminDocument = this.afs.doc<ClientAdmin>(`ClientsAdmins/${id}`);
    this.clientAdmin = this.clientAdminDocument.valueChanges();
    return this.clientAdmin;
  }

  getClientAdmins(): Observable<ClientAdmin[]> {
    this.clientAdmins= this.clientAdminCollection.snapshotChanges().pipe(map(changes => {
      return changes.map( action => {
        const clientAdminData= action.payload.doc.data() as ClientAdmin;
        clientAdminData.clientAdminId= action.payload.doc.id;
        return clientAdminData;
      });
    }));

    return this.clientAdmins;
  }

  addAdmin(clientadmin: ClientAdmin) {
    return new Promise((resolve, reject)=> {
      this.clientAdminCollection.add(clientadmin)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }





}
