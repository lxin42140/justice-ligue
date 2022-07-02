import { DummyLawyer, DummyClient } from './../data/data';
import { Injectable } from '@angular/core';
import { Client } from '../models/Client';
import { LawAreaEnum } from '../models/enums/law-area.enum';
import { LegalIssueEnum } from '../models/enums/legal-issue.enum';
import { Lawyer } from '../models/Lawyer';

type NewType = Lawyer;

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  isClient: boolean;
  lawyer: NewType;
  client: Client;

  constructor() { 
    this.isClient = true;
    this.lawyer = DummyLawyer;
    this.client = DummyClient;
  }

  public switchUser(): void {
    this.isClient = !this.isClient;
  }
  
}
