import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vogelhok',
  templateUrl: './vogelhok.component.html',
  styleUrls: ['./vogelhok.component.scss']
})
export class VogelhokComponent implements OnInit {

  public currentId: string;


  surveyData = [
    { name: 'Huismussen', value: 55 },
    { name: 'Zwaluwen', value: 150 },
    { name: 'Spreeuwen', value: 70 },
    { name: 'Vinken', value: 40 },
    { name: 'Koolmeesjes', value: 90 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
