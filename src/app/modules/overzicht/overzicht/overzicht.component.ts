import { Component, OnInit } from '@angular/core';
import { WikipediaService } from 'src/app/core/services/wikipedia.service';
import {multi} from './data';

@Component({
  selector: 'app-overzicht',
  templateUrl: './overzicht.component.html',
  styleUrls: ['./overzicht.component.scss']
})
export class OverzichtComponent implements OnInit {

  constructor(private wikiService: WikipediaService) { }

  mainImage : string = "../../../../assets/img/shutterstock_731053603.png";
  firstBird : string = "../../../../assets/img/Vink.png";
  secondBird : string = "../../../../assets/img/Merel.png";
  thirdBird : string = "../../../../assets/img/Roodborst.png";
  fourthBird : string = "../../../../assets/img/Common_Blackbird.jpg";

  mainDescription : string = "";
  firstDescription : string = "";
  secondDescription : string = "";
  thirdDescription : string = "";
  fourthDescription : string = "";

  ngOnInit(): void {
    Object.assign(this, {multi});

    this.wikiService.getWikiDescription('Common_raven').subscribe(data => {
      console.log(data.thumbnail.source);
      this.mainImage = data.thumbnail.source;
      this.mainDescription = data.description;
      console.log(data.description);
    }, err => { console.log('something went wrong' + err)
  }); 
  }

  showDiv = {
    previous : false,
    current : false,
    next : false
  }

  surveyData = [
    { name: 'Ma', value: 32 },
    { name: 'Di', value: 28 },
    { name: 'Wo', value: 34 },
    { name: 'Do', value: 4 },
    { name: 'Vr', value: 7 },
    { name: 'Za', value: 8 },
    { name: 'Zo', value: 9 }
  ];

  single: any[];
  multi: any;

  view: any = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  

}
