import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-faunatoren',
  templateUrl: './faunatoren.component.html',
  styleUrls: ['./faunatoren.component.scss']
})
export class FaunatorenComponent implements OnInit {
  public currentId: string;

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: string = 'Soorten';
  showXAxisLabel: string = 'Aantal audio registraties';
  xAxisLabel1: string = 'registraties';
  yAxisLabel1: string = 'Population';
  timeline: boolean = true;
  legendPosition: string = 'below';
  maxRadius: number = 40;
  minRadius: number = 0;
  yScaleMin: number = 20;
  yScaleMax: number = 40;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  surveyData = [
    { name: 'Huismussen', value: 9 },
    { name: 'Zwaluwen', value: 13 },
    { name: 'Spreeuwen', value: 3 },
    { name: 'Vinken', value: 6 },
    { name: 'Koolmeesjes', value: 5 }
  ];

  bubbleData =  [
    {
      name: 'Hok 1',
      series: [
        {
          name: '12:00',
          x: '12:00',
          y: 12.0,
          r: 80.4
        },
        {
          name: '13:00',
          x: '13:00',
          y: 12.5,
          r: 78
        },
        {
          name: '14:00',
          x: '14:00',
          y: 13,
          r: 79
        }
      ]
    },
    {
      name: 'Hok 2',
      series: [
        {
          name: '12:00',
          x: '12:00',
          y: 13.5,
          r: 310
        },
        {
          name: '13:00',
          x: '13:00',
          y: 14.5,
          r: 283
        },
        {
          name: '14:00',
          x: '14:00',
          y: 15,
          r: 253
        }
      ]
    },
    {
      name: 'Hok 3',
      series: [
        {
          name: '12:00',
          x: '12:00',
          y: 12,
          r: 63
        },
        {
          name: '13:00',
          x: '13:00',
          y: 13,
          r: 59.4
        },
        {
          name: '14:00',
          x: '14:00',
          y: 14,
          r: 56.9
        }
      ]
    },
    {
      name: 'Hok 4',
      series: [
        {
          name: '12:00',
          x: '12:00',
          y: 13,
          r: 62.7
        },
        {
          name: '13:00',
          x: '13:00',
          y: 14,
          r: 58.9
        },
        {
          name: '14:00',
          x: '14:00',
          y: 15,
          r: 57.1
        }
      ]
    }
  ];

  single = [
    {
      "name": "Hok 1",
      "value": 5
    },
    {
      "name": "Hok 2",
      "value": 1
    },
    {
      "name": "Hok 3",
      "value": 0
    },
      {
      "name": "Hok 4",
      "value": 1
    },
    {
      "name": "Hok 5",
      "value": 1
    },
    {
      "name": "Hok 6",
      "value": 0
    },
    {
      "name": "Hok 7",
      "value": 1
    },
      {
      "name": "Hok 8",
      "value": 1
    },
    {
      "name": "Hok 9",
      "value": 0
    },
    {
      "name": "Hok 10",
      "value": 0
    },
    {
      "name": "Hok 11",
      "value": 1
    },
      {
      "name": "Hok 12",
      "value": 2
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
