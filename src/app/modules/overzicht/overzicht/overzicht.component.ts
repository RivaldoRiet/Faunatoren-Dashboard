import { Component, OnInit } from '@angular/core';
import { WikipediaService } from 'src/app/core/services/wikipedia.service';
import {multi} from './data';
import {civity} from './civity';

@Component({
  selector: 'app-overzicht',
  templateUrl: './overzicht.component.html',
  styleUrls: ['./overzicht.component.scss']
})
export class OverzichtComponent implements OnInit {

  constructor(private wikiService: WikipediaService) { }

  bird : Bird = new Bird();
  bird1 : Bird = new Bird();
  bird2 : Bird = new Bird();
  bird3 : Bird = new Bird();
  bird4 : Bird = new Bird();

  allTemperaturesValues : number[] = [];
  lastTemperatureValue : number = 0;

  temperatureObject: any[] = [
  ];

  ngOnInit(): void {


    Object.assign(this, {multi});
    this.wikiService.getWikiDescription('Common_raven').subscribe(data => {
      this.bird.name = data.displaytitle;
      this.bird.image = data.thumbnail.source;
      this.bird.description = data.extract;
    }, err => { console.log('Error' + err)
  }); 

    this.wikiService.getWikiDescription('Common_wood_pigeon').subscribe(data => {
      this.bird1.name = data.displaytitle;
      this.bird1.image = data.thumbnail.source;
      this.bird1.description = data.extract;
    }, err => { console.log('Error' + err)
  }); 

  this.wikiService.getWikiDescription('Tawny_owl').subscribe(data => {
    this.bird2.name = data.displaytitle;
    this.bird2.image = data.thumbnail.source;
    this.bird2.description = data.extract;
  }, err => { console.log('Error' + err)
  }); 

  this.wikiService.getWikiDescription('eurasian_eagle-owl').subscribe(data => {
    this.bird3.name = data.displaytitle;
    this.bird3.image = data.thumbnail.source;
    this.bird3.description = data.extract;
  }, err => { console.log('Error' + err)
  }); 

  this.wikiService.getWikiDescription('Little_bittern').subscribe(data => {
    this.bird4.name = data.displaytitle;
    this.bird4.image = data.thumbnail.source;
    this.bird4.description = data.extract;
  }, err => { console.log('Error' + err)
  }); 

  Object.assign(this, {civity});
  this.buildTemperatureData();
  }

  buildTemperatureData()
  {
    let pusheditems = {};
    let myarray : any = [];
    let lastTemp : number[] = [];
    civity.forEach(element => {
      if (element.temperature !== undefined && element.dateModified !== undefined) {
        var modDate = element.dateObserved;
        var temperature = element.temperature;
        pusheditems[element.temperature] = modDate;
        lastTemp.push(temperature);
        myarray.push({name : modDate , value : temperature});
      }
    });
    let done: any = {};
  
    done.name = "temperatuur";
    done.series = myarray;
  
    this.lastTemperatureValue = lastTemp[lastTemp.length - 1];
    this.temperatureObject.push(done);
  
    console.log(this.temperatureObject);
  }

  showDiv = {
    live : true,
    luchtvochtigheid : false,
    temperatuur : false,
    gewicht: false,
  }
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
}

export class Bird {
  name?:          string;
  image?:         string;
  description?:  string;
}