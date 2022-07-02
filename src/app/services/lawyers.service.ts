import { Injectable } from '@angular/core';
import { DummyLawyer } from '../data/data';
import { Lawyer } from '../models/Lawyer';

@Injectable({
  providedIn: 'root'
})
export class LawyersService {

  allLawyers: Lawyer[] = [];

  constructor() {
    this.allLawyers = [
      DummyLawyer
    ]
  }
}
