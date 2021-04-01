import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-faunatoren',
  templateUrl: './faunatoren.component.html',
  styleUrls: ['./faunatoren.component.scss']
})
export class FaunatorenComponent implements OnInit {
  public currentId: string;

  multi: any[];
  view: any[] = [800, 300];

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Aantal registraties';
  yAxisLabel: string = 'Vogelsoorten';
  timeline: boolean = true;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  surveyData = [
    { name: 'Huismussen', value: 55 },
    { name: 'Zwaluwen', value: 150 },
    { name: 'Spreeuwen', value: 70 },
    { name: 'Vinken', value: 40 },
    { name: 'Koolmeesjes', value: 90 }
  ];

  bubbleData =  [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          x: '2010',
          y: 80.3,
          r: 80.4
        },
        {
          name: '2000',
          x: '2000',
          y: 80.3,
          r: 78
        },
        {
          name: '1990',
          x: '1990',
          y: 75.4,
          r: 79
        }
      ]
    },
    {
      name: 'United States',
      series: [
        {
          name: '2010',
          x: '2010',
          y: 78.8,
          r: 310
        },
        {
          name: '2000',
          x: '2000',
          y: 76.9,
          r: 283
        },
        {
          name: '1990',
          x: '1990',
          y: 75.4,
          r: 253
        }
      ]
    },
    {
      name: 'France',
      series: [
        {
          name: '2010',
          x: '2010',
          y: 81.4,
          r: 63
        },
        {
          name: '2000',
          x: '2000',
          y: 79.1,
          r: 59.4
        },
        {
          name: '1990',
          x: '1990',
          y: 77.2,
          r: 56.9
        }
      ]
    },
    {
      name: 'United Kingdom',
      series: [
        {
          name: '2010',
          x: '2010',
          y: 80.2,
          r: 62.7
        },
        {
          name: '2000',
          x: '2000',
          y: 77.8,
          r: 58.9
        },
        {
          name: '1990',
          x: '1990',
          y: 75.7,
          r: 57.1
        }
      ]
    }
  ];

  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
      {
      "name": "UK",
      "value": 6200000
    }
  ];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    ) {
     }

 ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.currentId = params.id;
      });
  }

}
