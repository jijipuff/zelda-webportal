import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientsCollection: AngularFirestoreCollection<Client>;
  clientDocument: AngularFirestoreDocument<Client>;
  client: Observable<Client>;

  constructor(private afs: AngularFirestore) { }

  getClient(id: string): Observable<Client> {
    this.clientDocument= this.afs.doc<Client>(`Clients/${id}`);
    this.client= this.clientDocument.valueChanges();
    return this.client;
  }
}
