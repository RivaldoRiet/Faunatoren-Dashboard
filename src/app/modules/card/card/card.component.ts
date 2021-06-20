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

  constructor(private modalService: NgbModal, private civityService : CivityService, private wikiService : WikipediaService) { }

  ngOnInit() {
    this.civityService.getCivityData('testhok1_BIRD', 100).subscribe(data => {
      console.log(data);
       this.civityBird = data;
       this.buildBirdData();
    }, err => { console.log(err)
  });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

  buildBirdData()
  {
    let birdArray : any = [];
    this.civityBird.forEach(element => {
      for (const value of element.species) {
        const firstKey = Object.keys(value)[0];
        birdArray.push(firstKey.toString().split("_")[0]);
      }
    });

    var sortedBirdArray = Array.from(new Set(birdArray)).map(a =>
      ({name:a, value: birdArray.filter(f => f === a).length}));
    
      sortedBirdArray.sort(function (a, b) {
        return b.value - a.value;
      });

  //  console.log(sortedBirdArray);
    this.birdData = sortedBirdArray.slice(0, 5);

    console.log(this.birdData);

    let dutchBirds : any = [];
    for (const bird of sortedBirdArray) {
      this.wikiService.getDutchWikiDescription(bird.name.toString()).subscribe(data => {
        
        const result = {name: data.displaytitle, value: bird.value};
        dutchBirds.push(result);
      });
    }
    this.birdDataDutch = dutchBirds;
    console.log(this.birdDataDutch);
/*
   
*/
  }


  open() {
    console.log("trying to open");
    console.log("name: " + this.name + " - description: " + this.description + " - src: " + this.src);
    const currentModalReference = this.modalService.open(CardModalContent, { size: 'xl' });
    currentModalReference.componentInstance.name = this.name;
    currentModalReference.componentInstance.description = this.description;
    currentModalReference.componentInstance.src = this.src;
  }
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
