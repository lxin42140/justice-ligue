import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

//CRUD of client schedules

export class ClientScheduleService {

  constructor(private db: AngularFirestore) { }
}
