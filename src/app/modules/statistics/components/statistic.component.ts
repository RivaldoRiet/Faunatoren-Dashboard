import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit, OnDestroy {
  public currentId: string;

  surveyData = [
    { name: 'Huismussen', value: 105 },
    { name: 'Zwaluwen', value: 350 },
    { name: 'Spreeuwen', value: 170 },
    { name: 'Vinken', value: 140 },
    { name: 'Koolmeesjes', value: 200 }
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

  ngOnDestroy(): void {

  }
}
