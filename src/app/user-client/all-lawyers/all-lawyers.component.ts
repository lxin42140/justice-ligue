import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LawyersService } from 'src/app/services/lawyers.service';

@Component({
  selector: 'app-all-lawyers',
  templateUrl: './all-lawyers.component.html',
  styleUrls: ['./all-lawyers.component.scss']
})
export class AllLawyersComponent implements OnInit {

  lawMatterSubject: string = '';
  lawMatterSubjectExample: string = '';
  lawServiceCategory: string = '';

  constructor(
    private aRoute: ActivatedRoute,
    public lawyersService: LawyersService,
  ) { }

  ngOnInit(): void {
    this.lawMatterSubject = this.aRoute.snapshot.paramMap.get('subject') ?? '';
    this.lawMatterSubjectExample = this.aRoute.snapshot.paramMap.get('example') ?? '';
    this.lawServiceCategory = this.aRoute.snapshot.paramMap.get('service') ?? '';
    //prob need to do some validation here. or can be done later when retrieving lawyers.
  }
}