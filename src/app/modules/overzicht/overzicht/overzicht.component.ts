import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { WikipediaService } from 'src/app/core/services/wikipedia.service';
import { CivityService } from 'src/app/core/services/civity.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faInfo, faWrench } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable } from 'rxjs';
import { CardComponent } from '../../card/card/card.component';

@Component({
  selector: 'app-overzicht',
  templateUrl: './overzicht.component.html',
  styleUrls: ['./overzicht.component.scss']
})
export class OverzichtComponent implements OnInit, AfterViewInit {

  @ViewChild('content', { static: false }) private content;
  public cdRef: ChangeDetectorRef;
  constructor(private wikiService: WikipediaService, private civityService: CivityService,
    private modalService: NgbModal, cdRef: ChangeDetectorRef,) {
      this.cdRef = cdRef;
     }
  private title: BehaviorSubject<string> = new BehaviorSubject<string>('fuckman');
  @ViewChild(CardComponent) cardComponent: CardComponent;
  civityBird;
  civitySensor;
  faInfo = faInfo;
  faWrench = faWrench;
  wtfobject : debugObject = new debugObject();

  bird : Bird = new Bird();
  bird2 : Bird = new Bird();
  bird3 : Bird = new Bird();
  bird4 : Bird = new Bird();
  mostRecentBird : Bird = new Bird();

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
    this.loadBirdData(100, 1, true);
    this.loadSensorData(500, 1, true);
  }

  ngAfterViewInit() {

  }


  reloadData(records, hours){
    this.loadBirdData(records, hours, false);
    this.loadSensorData(records, hours, false);
    this.cardComponent.reloadData(records, hours);
    this.cdRef.detectChanges();
  }

  loadBirdData(records, hours, failsafe){
    this.civityService.getCivityData('testhok1_BIRD', records, hours).subscribe(data => {
       this.civityBird = data;
       if (failsafe && this.civityBird.length == 0 && hours < 1000) {
        this.loadBirdData(100, hours * 10, true);
        return;
       }
       this.buildBirdData();
       this.cdRef.detectChanges();
    }, err => { console.log(err)
  });
  }

  loadSensorData(records, hours, failsafe){
    this.civityService.getCivityData('testhok1_SENSOR', records, hours).subscribe(data => {
      this.civitySensor = data;
      if (failsafe && this.civitySensor.length == 0 && hours < 1000) {
        this.loadSensorData(100, hours * 10, true);
        return;
       }
      this.buildTemperatureData();
      this.buildLuchtVochtigheidData();
      this.buildGewichtData();
      this.cdRef.detectChanges();
    }, err => { console.log(err)
  });
  }

  buildBirdData()
  {
    let birdArray : any = [];
    this.civityBird.forEach(element => {
      for (const value of element.species) {
        const birdName = Object.keys(value)[0];
        if (birdName !== "Human_Human") {
          birdArray.push(birdName);
        }
    }
    });

   let recentBird = birdArray[birdArray.length - 1].toString();
   this.setRecentBird(recentBird);

    var sortedBirdArray = Array.from(new Set(birdArray)).map(a =>
      ({name:a, y: birdArray.filter(f => f === a).length}));
    
      sortedBirdArray.sort(function (a, b) {
        return b.y - a.y;
      });

    this.setBird(sortedBirdArray, this.bird, 0);
    this.setBird(sortedBirdArray, this.bird2, 2);
    this.setBird(sortedBirdArray, this.bird3, 3);
    this.setBird(sortedBirdArray, this.bird4, 4);
  }

  setRecentBird(recentBird)
  {
    let nameOfBird = "" + recentBird;
    nameOfBird = nameOfBird.toString().split("_")[0];
    this.wikiService.getDutchWikiDescription(nameOfBird).subscribe(data => {
      this.mostRecentBird.name = data.displaytitle;
      this.mostRecentBird.latinname = nameOfBird;
      this.mostRecentBird.image = data.thumbnail.source;
      this.mostRecentBird.description = data.extract_html;
      }, err => { console.log(err)
      });
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
    if (this.temperatureObject[0] !== undefined) {
      this.temperatureObject[0] = done;
    }else{
      this.temperatureObject.push(done);
    }
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

export class debugObject{
  name?: string = 'nameeeeeeeeee';
}