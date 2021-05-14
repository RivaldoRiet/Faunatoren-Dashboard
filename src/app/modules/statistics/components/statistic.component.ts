import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit, OnDestroy {
  public currentId: string;

//   @HostListener('window:resize', ['$event'])
//   onResize(event) {
//   event.target.innerWidth;
// }


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

  multi: any[];

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Aantal audio registraties';
  yAxisLabel: string = 'Soort';
  timeline: boolean = true;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  // line, area
  autoScale = true;

  //pie
  explodeSlices = false;
  doughnut = false;
  gradient = false;
  showLegend = true;




  surveyData = [
    { name: 'Huismussen', value: 23 },
    { name: 'Zwaluwen', value: 34 },
    { name: 'Spreeuwen', value: 12 },
    { name: 'Vinken', value: 21 },
    { name: 'Koolmeesjes', value: 20 }
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
  
  public multiData = [
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


}
