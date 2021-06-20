import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CivityService } from 'src/app/core/services/civity.service';
import { WikipediaService } from 'src/app/core/services/wikipedia.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
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

  ngOnInit() {
    this.civityService.getCivityData('testhok1_BIRD', 100).subscribe(data => {
      //console.log(data);
       this.civityBird = data;
       this.buildBirdData();
    }, err => { console.log(err)
  });
  }

  openXl(content) {
    //console.log("name: " + this.name + " - description: " + this.description + " - src: " + this.src + " - latinname: " + this.latinname);
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
        // console.log(this.latinname);
        // console.log(firstKey + " - " + this.latinname);
       if (firstKey == this.latinname) {
         console.log(firstKey + " - " + this.latinname);
         let unix = Date.parse(element.dateObserved);
         let newDate = new Date(unix);
         var time = newDate.getHours() + ":" + newDate.getMinutes();
         mycount.push({name: firstKey, value: time});
       }
      }
    });
    console.log(mycount);

    console.log(this.mapToProp(mycount, 'value'));
    console.log("val: " + this.mapToProp(mycount, 'value')[0] + " - " + this.mapToProp(mycount, 'value')[1]);

    for (const [key, value] of Object.entries(this.mapToProp(mycount, 'value'))) {
      console.log(key, value);
      myarray.push({name : key , value : value});
    }

    let done: any = {};
  
    done.name = this.name;
    done.series = myarray;
  
    this.lastGewichtValue = lastTemp[lastTemp.length - 1];
    this.GewichtObject.push(done);
  
    console.log(this.GewichtObject);
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
