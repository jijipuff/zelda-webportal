import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { ClientAdmin } from '../models/ClientAdmin';


@Injectable({
  providedIn: 'root'
})
export class ClientAdminService {
  clientAdminDocument: AngularFirestoreDocument<ClientAdmin>;
  clientAdmin: Observable<ClientAdmin>;

  constructor(private afs: AngularFirestore) { }

  getClientAdmin(id: string): Observable<ClientAdmin> {
    this.clientAdminDocument = this.afs.doc<ClientAdmin>(`ClientsAdmins/${id}`);
    this.clientAdmin = this.clientAdminDocument.valueChanges();
    return this.clientAdmin;
  }

}
