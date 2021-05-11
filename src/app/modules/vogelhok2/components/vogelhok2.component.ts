import { Component, OnInit } from '@angular/core';
import { TimelineItem } from 'ngx-timeline-albe';


@Component({
  selector: 'app-vogelhok2',
  templateUrl: './vogelhok2.component.html',
  styleUrls: ['./vogelhok2.component.scss']
})
export class Vogelhok2Component implements OnInit {

  public data: Array<TimelineItem> | String = [];
  public currentId: string;

  surveyData = [
    { name: 'Ma', value: 83 },
    { name: 'Di', value: 150 },
    { name: 'Wo', value: 64 },
    { name: 'Do', value: 48 },
    { name: 'Vr', value: 74 },
    { name: 'Za', value: 106 },
    { name: 'Zo', value: 89 }
  ];

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        datetime: new Date('2020-03-29 23:59:59'),
        header: 'Sample of header',
        body: [
          // {
          //   tag: 'h1',
          //   content: "Lorem ipsum"
          // },
          {
            tag: 'p',
            content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa.'
          }],
        footer: 'Sample of footer. See <a href=\"https://github.com/Albejr/ngx-timeline\" target=\"_blank\">more details</a>'
      },
      {
        datetime: new Date('2020-03-28 23:49:59'),
        header: 'IN',
        body: [
          // {
          //   tag: 'h1',
          //   content: "Lorem ipsum"
          // },
          {
            tag: 'p',
            content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa.'
          }],
        footer: 'Sample of footer. See <a href=\"https://github.com/Albejr/ngx-timeline\" target=\"_blank\">more details</a>'
      },
      {
        datetime: new Date('2020-03-27 23:39:59'),
        header: 'Sample of header',
        body: [
          // {
          //   tag: 'h1',
          //   content: "Lorem ipsum"
          // },
          {
            tag: 'p',
            content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa.'
          }],
        footer: 'Sample of footer. See <a href=\"https://github.com/Albejr/ngx-timeline\" target=\"_blank\">more details</a>'
      }
    ];
  }
  

}
