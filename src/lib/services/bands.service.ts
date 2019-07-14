import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Band } from '../models/band.model';

@Injectable({
  providedIn: 'root'
})
export class BandsService {
  constructor(private firestore: AngularFirestore) {}

  createBand(band: Band) {
    return this.firestore.collection('bands').add(band);
  }

  readBands() {
    return this.firestore.collection('bands').snapshotChanges();
  }

  updateBand(band: Band) {
    delete band.id;
    return this.firestore.doc(`bands/${band.id}`).update(band);
  }

  deleteBand(bandId: string) {
    return this.firestore.doc(`bands/${bandId}`).delete();
  }
}
