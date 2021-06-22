import { Component, OnInit, ViewChild } from '@angular/core';
import { WikipediaService } from 'src/app/core/services/wikipedia.service';
import {multi} from './data';
import { CivityService } from 'src/app/core/services/civity.service';
import {civityold} from './civity';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-overzicht',
  templateUrl: './overzicht.component.html',
  styleUrls: ['./overzicht.component.scss']
})
export class OverzichtComponent implements OnInit {

  @ViewChild('content', { static: false }) private content;

  constructor(private wikiService: WikipediaService, private civityService: CivityService,
    private modalService: NgbModal) { }

  civityBird;
  civitySensor;

  bird : Bird = new Bird();
  bird1 : Bird = new Bird();
  bird2 : Bird = new Bird();
  bird3 : Bird = new Bird();
  bird4 : Bird = new Bird();

  allTemperaturesValues : number[] = [];
  lastTemperatureValue : number = 0;
  temperatureObject: any[] = [
  ];

  allLuchtvochtigheidValues : number[] = [];
  lastLuchtvochtigheidValue : number = 0;
  LuchtvochtigheidObject: any[] = [
  ];

  allGewichtValues : number[] = [];
  lastGewichtValue : number = 0;
  GewichtObject: any[] = [
  ];

  ngOnInit(): void {
    Object.assign(this, {multi});
    this.civityService.getCivityData('testhok1_BIRD', 100, 1).subscribe(data => {
      //console.log(data);
       this.civityBird = data;
       this.buildBirdData();
    }, err => { console.log(err)
  });

  this.civityService.getCivityData('testhok1_SENSOR', 100, 1).subscribe(data => {
   // console.log(data);
     this.civitySensor = data;
     this.buildTemperatureData();
     this.buildLuchtVochtigheidData();
     this.buildGewichtData();
  }, err => { console.log(err)
});
  }


  buildBirdData()
  {
    let birdArray : any = [];
    this.civityBird.forEach(element => {
      for (const value of element.species) {
        const birdName = Object.keys(value)[0];
        birdArray.push(birdName);
    }
    });
    

   // console.log(birdArray);

    var sortedBirdArray = Array.from(new Set(birdArray)).map(a =>
      ({name:a, y: birdArray.filter(f => f === a).length}));
    
      sortedBirdArray.sort(function (a, b) {
        return b.y - a.y;
      });

    //console.log(sortedBirdArray);

    this.setBird(sortedBirdArray, this.bird, 0);
    this.setBird(sortedBirdArray, this.bird1, 1);
    this.setBird(sortedBirdArray, this.bird2, 2);
    this.setBird(sortedBirdArray, this.bird3, 3);
    this.setBird(sortedBirdArray, this.bird4, 4);
  }


  setBird(sortedBirdArray, bird, count)
  {
    if (sortedBirdArray.length <= count) {
      return;
    }
        // get 5 birds
        let nameOfBird = sortedBirdArray[count].name;
        nameOfBird = nameOfBird.toString().split("_")[0];

      this.wikiService.getDutchWikiDescription(nameOfBird.toString()).subscribe(data => {
        bird.name = data.displaytitle;
        bird.latinname = nameOfBird;
        bird.image = data.thumbnail.source;
        bird.description = data.extract_html;
      }, err => { console.log(err)
      });
  }

  buildGewichtData()
  {
    let pusheditems = {};
    let myarray : any = [];
    let lastTemp : number[] = [];
    this.civitySensor.forEach(element => {
      //console.log(element);
      if (element.weight !== undefined && element.dateModified !== undefined) {
        let unix = Date.parse(element.dateObserved);
        let newDate = new Date(unix);
        var time = newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
        var modDate = time;
        var weight = element.weight;
        pusheditems[element.weight] = modDate;
        lastTemp.push(weight);
        myarray.push({name : modDate , value : weight});
      }
    });
    let done: any = {};
  
    done.name = "Gewicht";
    done.series = myarray;
  
    this.lastGewichtValue = lastTemp[lastTemp.length - 1];
    this.GewichtObject = [... this.GewichtObject];
    this.GewichtObject.push(done);
  
    console.log(this.GewichtObject);
  }


  buildLuchtVochtigheidData()
  {
    let pusheditems = {};
    let myarray : any = [];
    let lastTemp : number[] = [];
    this.civitySensor.forEach(element => {
      if (element.activity !== undefined && element.dateModified !== undefined) {
        let unix = Date.parse(element.dateObserved);
        let newDate = new Date(unix);
        var time = newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
        var modDate = time;
        var activity = element.activity;
        pusheditems[element.activity] = modDate;
        lastTemp.push(activity);
        myarray.push({name : modDate , value : activity});
      }
    });
    let done: any = {};
  
    done.name = "Luchtvochtigheid";
    done.series = myarray;
  
    this.lastLuchtvochtigheidValue = lastTemp[lastTemp.length - 1];
    this.LuchtvochtigheidObject = [... this.LuchtvochtigheidObject];
    this.LuchtvochtigheidObject.push(done);
  
   // console.log(this.LuchtvochtigheidObject);
  }


  buildTemperatureData()
  {
    let pusheditems = {};
    let myarray : any = [];
    let lastTemp : number[] = [];
    this.civitySensor.forEach(element => {
      if (element.temperature !== undefined && element.dateModified !== undefined) {
        let unix = Date.parse(element.dateObserved);
        let newDate = new Date(unix);
        var time = newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
        var modDate = time;
        var temperature = element.temperature;
        pusheditems[element.temperature] = modDate;
        lastTemp.push(temperature);
        myarray.push({name : modDate , value : temperature});
      }
    });
    let done: any = {};
  
    done.name = "temperatuur";
    done.series = myarray;
  
    this.lastTemperatureValue = Math.round(lastTemp[lastTemp.length - 1] * 10) / 10;
    this.temperatureObject = [... this.temperatureObject];
    this.temperatureObject.push(done);
  
   // console.log(this.temperatureObject);
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
  latinname?:          string;
  image?:         string;
  description?:  string;
}