import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit, OnDestroy {
  public currentId: string;



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




  view: any[] = [700, 400];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Number';
  showYAxisLabel = true;
  yAxisLabel = 'Value';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  //pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;





  surveyData = [
    { name: 'Huismussen', value: 105 },
    { name: 'Zwaluwen', value: 350 },
    { name: 'Spreeuwen', value: 170 },
    { name: 'Vinken', value: 140 },
    { name: 'Koolmeesjes', value: 200 }
  ];

  public single = [
    {
      "name": "Huismussen",
      "value": 89
    },
    {
      "name": "Zwaluwen",
      "value": 81
    },
    {
      "name": "Spreeuwen",
      "value": 87
    }
  ];
  
  public multi = [
    {
      "name": "Huismussen",
      "series": [
        {
          "name": "2020",
          "value": 73
        },
        {
          "name": "2021",
          "value": 89
        }
      ]
    },
  
    {
      "name": "Zwaluwen",
      "series": [
        {
          "name": "2020",
          "value": 78
        },
        {
          "name": "2021",
          "value": 82
        }
      ]
    },
  
    {
      "name": "Spreeuwen",
      "series": [
        {
          "name": "2020",
          "value": 52
        },
        {
          "name": "2021",
          "value": 94
        }
      ]
    }
  ];

  

}
