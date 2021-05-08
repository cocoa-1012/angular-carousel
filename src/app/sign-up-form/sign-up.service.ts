import { Injectable } from '@angular/core';
import {Signup} from './sign-up.class';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private firestore: AngularFirestore) { }

  insert(signup: Signup) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('early-access-requests')
        .add({
          name: signup.name,
          email: signup.email,
          roles: signup.roles,
          // roleOtherDescription: signup.roleOtherDescription,
          eventType: signup.eventType
        })
        .then(res => {}, err => reject(err));
    });
  }
}
