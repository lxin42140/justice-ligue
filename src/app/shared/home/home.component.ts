import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedOption: number = -1;

  constructor(
    private router: Router,
    public accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  selectOption(option: number) {
    this.selectedOption = option;
  }

  resetOption() {
    this.selectedOption = -1;
  }

  navigate() {
    if (this.accountService.isClient) {
      switch (this.selectedOption) {
        case (0):
          this.router.navigate(['client/matching'])
          break;
        case (1):
          this.router.navigate(['client/view-consultations']);
          break;
        default:
          break;
      }
    } else {
      switch (this.selectedOption) {
        case (0):
          this.router.navigate([''])
          break;
        case (1):
          this.router.navigate(['lawyer/view-appointments']);
          break;
        default:
          break;
      }
    }
  }

}
