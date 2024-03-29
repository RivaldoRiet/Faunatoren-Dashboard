import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CivityService } from 'src/app/core/services/civity.service';
import { WikipediaService } from 'src/app/core/services/wikipedia.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {
  @Input() name = '[name]';
  @Input() latinname = '[latinname]';
  @Input() description = '[description]';
  @Input() src = '[src]';

  
  allBirdValues : number[] = [];
  lastBirdValue : number = 0;
  birdObject: any[] = [
  ];
  civityBird;
  birdName : string = 'vogel naam'; 
  birdData;
  birdDataDutch;

  allGewichtValues : number[] = [];
  lastGewichtValue : number = 0;
  GewichtObject: any[] = [
  ];

  constructor(private modalService: NgbModal, private civityService : CivityService, private wikiService : WikipediaService) { }


  ngAfterViewInit() {
    // ...
   // this.loadBirdData(100, 1);
  }

  reloadData(records, hours){
    this.civityBird = [];
    //this.loadBirdData(records, hours, false);
  }

  loadBirdData(records, hours, failsafe){
     this.civityService.getCivityData('testhok1_BIRD', records, hours).subscribe(data => {
        this.civityBird = data;
        if (failsafe && this.civityBird.length == 0 && hours < 1000) {
         this.loadBirdData(100, hours * 10, true);
         return;
        }
        this.buildBirdData();
     }, err => { console.log(err)
   });
   }
 

  ngOnInit() {
    this.loadBirdData(100, 1, true);
  }

  openXl(content) {  
    this.modalService.open(content, { size: 'xl' });
  }

  buildBirdData()
  {
    let birdName = '';
    let pusheditems = {};
    let myarray : any = [];
    let mycount : any = [];
    let lastTemp : number[] = [];
    let count = 0;

    this.civityBird.sort(function (a, b) {
        return Date.parse(a.dateObserved) - Date.parse(b.dateObserved);
      });

    this.civityBird.forEach(element => {
      for (const value of element.species) {
        const firstKey = Object.keys(value)[0].split('_')[0];
       if (firstKey == this.latinname) {
         let unix = Date.parse(element.dateObserved);
         let newDate = new Date(unix);
         var time = newDate.getHours() + ":" + newDate.getMinutes();
         mycount.push({name: firstKey, value: time});
       }
      }
    });

    for (const [key, value] of Object.entries(this.mapToProp(mycount, 'value'))) {
      myarray.push({name : key , value : value});
    }

    console.log("----- my array ----------------");
    console.log(myarray);
    console.log("----- my array ----------------");

    let done: any = {};
  
    if (this.name !== undefined && this.name !== '') {
    done.name = this.name;
    done.series = myarray;
  
    this.lastGewichtValue = lastTemp[lastTemp.length - 1];
    this.GewichtObject.push(done);
    this.GewichtObject = [...this.GewichtObject];
    console.log(this.GewichtObject);
    }
  }

  mapToProp(data, prop) {
    return data
      .reduce((res, item) => Object
        .assign(res, {
          [item[prop]]: 1 + (res[item[prop]] || 0)
        }), Object.create(null))
    ;
  }

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
}

@Component({
  selector: 'card-modal-content',
  template: `
  <div class="modal-header" style="opacity: 100 !important;">
  <h4 class="modal-title">{{name}}</h4>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
  <p>{{description}}</p>
  <img src="{{src}}">
</div>
  `
})
export class CardModalContent {
  @Input() name;
  @Input() description;
  @Input() src;

  constructor(public activeModal: NgbActiveModal) { }
}
