import { Component, OnInit } from '@angular/core';
import { TimelineItem } from 'ngx-timeline-albe';


@Component({
  selector: 'app-vogelhok',
  templateUrl: './vogelhok.component.html',
  styleUrls: ['./vogelhok.component.scss']
})
export class VogelhokComponent implements OnInit {

  public data: Array<TimelineItem> | String = [];
  public currentId: string;

  surveyData = [
    { name: 'Ma', value: 55 },
    { name: 'Di', value: 150 },
    { name: 'Wo', value: 32 },
    { name: 'Do', value: 0 },
    { name: 'Vr', value: 0 },
    { name: 'Za', value: 0 },
    { name: 'Zo', value: 0 }
  ];

  constructor() { }

  ngOnInit(): void {
    this.data = [
      // // template
      // {
      //   datetime: new Date('2020-05-11 06:29:36'),
      //   header: 'UIT',
      //   body: [
      //     // {
      //     //   tag: 'h1',
      //     //   content: "Lorem ipsum"
      //     // },
      //     // {
      //     //   tag: 'p',
      //     //   content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa.'
      //     // }
      //   ]
      //     ,
      //   // footer: 'Sample of footer. See <a href=\"https://github.com/Albejr/ngx-timeline\" target=\"_blank\">more details</a>'
      // }
      {
        datetime: new Date('2020-05-12 12:15:12'),
        header: 'IN',
        body: [
          {
            tag: 'h1',
            content: "IN"
          },
          {
            tag: 'p',
            content: 'De koolmees heeft het hok verlaten.'
          }
        ]
          ,
      },
      {
        datetime: new Date('2020-05-12 10:30:20'),
        header: 'UIT',
        body: [],
      },
      {
        datetime: new Date('2020-05-12 9:12:50'),
        header: 'IN',
        body: [],
      },
      {
        datetime: new Date('2020-05-12 07:12:50'),
        header: 'UIT',
        body: [],
      },
      {
        datetime: new Date('2020-05-11 21:34:50'),
        header: 'IN',
        body: [],
      },
      {
        datetime: new Date('2020-05-11 19:14:52'),
        header: 'UIT',
        body: [],
      },
      {
        datetime: new Date('2020-05-11 19:04:10'),
        header: 'IN',
        body: [],
      },
      {
        datetime: new Date('2020-05-11 18:23:47'),
        header: 'UIT',
        body: [
        ]
      },
      {
        datetime: new Date('2020-05-11 15:52:23'),
        header: 'IN',
        body: [
        ]
      },
      {
        datetime: new Date('2020-05-11 14:26:23'),
        header: 'UIT',
        body: [
        ]
      },
      {
        datetime: new Date('2020-05-11 14:12:49'),
        header: 'IN',
        body: [
        ]
      },
      {
        datetime: new Date('2020-05-11 13:57:10'),
        header: 'UIT',
        body: [
        ]
      },
      {
        datetime: new Date('2020-05-11 13:45:32'),
        header: 'IN',
        body: [
        ]
      },
      {
        datetime: new Date('2020-05-11 13:20:08'),
        header: 'UIT',
        body: [
        ]
      },
      {
        datetime: new Date('2020-05-11 11:05:15'),
        header: 'IN',
        body: [
        ]
      },
      {
        datetime: new Date('2020-05-11 10:15:22'),
        header: 'UIT',
        body: [
        ]
      },
      {
        datetime: new Date('2020-05-11 09:30:45'),
        header: 'IN',
        body: [
        ]
      },
      {
        datetime: new Date('2020-05-11 08:13:53'),
        header: 'UIT',
        body: [
        ]
      },
      {
        datetime: new Date('2020-05-11 07:34:21'),
        header: 'IN',
        body: [
        ]
      },
      {
        datetime: new Date('2020-05-11 06:44:34'),
        header: 'UIT',
        body: [
        ]
      },
    ];
  }
}
