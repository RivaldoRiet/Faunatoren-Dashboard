import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { CivityService } from 'src/app/core/services/civity.service';
import { WikipediaService } from 'src/app/core/services/wikipedia.service';

@Component({
  selector: 'app-birdcard',
  templateUrl: './birdcard.component.html',
  styleUrls: ['./birdcard.component.scss']
})
export class BirdCardComponent implements OnInit {
  @Input() name = '[name]';
  @Input() description = '[description]';
  closeResult = '';
  civity;
  birdData;
  birdDataDutch;
  faInfo = faInfo;

  constructor(private modalService: NgbModal, private civityService: CivityService, private wikiService : WikipediaService) { }

  ngOnInit() {
    this.civityService.getCivityData('testhok1_BIRD', 500).subscribe(data => {
      this.civity = data;
      this.buildBirdData();
   }, err => { console.log(err)
  });
  }

buildBirdData()
  {
    let birdArray : any = [];
    this.civity.forEach(element => {
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

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

    open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

@Component({
  selector: 'card-modal-content',
  template: `
  <div class="modal-header">
  <h4 class="modal-title">{{name}}</h4>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
  <p>{{description}}</p>
</div>
  `
})
export class BirdCardModalContent {
  @Input() name;
  @Input() description;

  constructor(public activeModal: NgbActiveModal) { }
}
