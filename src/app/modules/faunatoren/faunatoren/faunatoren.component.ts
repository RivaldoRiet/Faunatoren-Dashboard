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
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
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
      "value": 34
    },
    {
      "name": "Hok 2",
      "value": 13
    },
    {
      "name": "Hok 3",
      "value": 4
    },
      {
      "name": "Hok 4",
      "value": 1
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
