import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-faunatoren',
  templateUrl: './faunatoren.component.html',
  styleUrls: ['./faunatoren.component.scss']
})
export class FaunatorenComponent implements OnInit {
  public currentId: string;
  view: any[] = [800,200];

  surveyData = [
    { name: 'Huismussen', value: 55 },
    { name: 'Zwaluwen', value: 150 },
    { name: 'Spreeuwen', value: 70 },
    { name: 'Vinken', value: 40 },
    { name: 'Koolmeesjes', value: 90 }
  ];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    ) { }

 ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.currentId = params.id;
      });
  }

}
