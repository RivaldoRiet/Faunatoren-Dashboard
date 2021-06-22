import { Component, OnInit, Input, ChangeDetectorRef, OnChanges, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { CivityService } from 'src/app/core/services/civity.service';
import { WikipediaService } from 'src/app/core/services/wikipedia.service';

@Component({
  selector: 'app-birdcard',
  templateUrl: './birdcard.component.html',
  styleUrls: ['./birdcard.component.scss']
})
export class BirdCardComponent implements OnInit, AfterViewInit{
  @Input() name = '[name]';
  @Input() description = '[description]';
  @ViewChild('content', { static: false }) private content;
  closeResult = '';
  isLoading = false;
  civity;
  birdData;
  birdDataDutch: any[];
  faInfo = faInfo;

  max = 48;
  vogelTimer = {
    currentTime: 1
  };

  constructor(private modalService: NgbModal, private civityService: CivityService, 
    private wikiService : WikipediaService, private cd: ChangeDetectorRef) { }

    ngOnChanges(changes: any) {
     console.log(changes);
     // this.open(this.content);
   }

  ngOnInit() {
    this.isLoading = true;
    this.civityService.getCivityData('testhok1_BIRD', 500, 1).subscribe(data => {
      this.civity = data;
      this.buildBirdData();
      this.isLoading = false;
   }, err => { console.log(err)
  });
  }

  ngAfterViewInit() {
    this.refreshData(this.vogelTimer.currentTime);
    //this.modalService.open(this.content, { size: 'xl' });
  }

  refreshData(currentTime)
  {
    if (currentTime < 1) {
      return;
    }
    this.isLoading = true;
    this.civityService.getCivityData('testhok1_BIRD', 500, this.vogelTimer.currentTime).subscribe(data => {
      this.civity = data;
      console.log(data);
      this.buildBirdData();
      console.log("first bird data");
      console.log(this.birdDataDutch);
      this.isLoading = false;
   }, err => { console.log(err)
  });
  }

reloadData(currentTime)
{
  if (currentTime < 1) {
    return;
  }
  this.vogelTimer.currentTime = currentTime;
  this.modalService.dismissAll();
  this.dismissModal();
  console.log(this.vogelTimer);
  //this.refreshData(currentTime);
}

dismissModal()
{
  this.isLoading = true;
  this.civityService.getCivityData('testhok1_BIRD', 500, this.vogelTimer.currentTime).subscribe(data => {
    (async () => { 
    this.civity = data;
    console.log(data);    
    this.buildBirdData();
    console.log("second bird data");
    console.log(this.birdDataDutch);
      // Do something before delay
      console.log('before delay')

      await this.delay(1000);

      // Do something after
      console.log('after delay')
      this.isLoading = false;
      this.modalService.open(this.content, { size: 'xl' });
  })();
 }, err => { console.log(err)
});
}

delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
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

    //console.log(this.birdData);

    let dutchBirds: any[] = [];
    dutchBirds = [...dutchBirds];
    for (const bird of sortedBirdArray) {
      this.wikiService.getDutchWikiDescription(bird.name.toString()).subscribe(data => {
        const result = {name: data.displaytitle, value: bird.value};
        dutchBirds.push(result);
      });
    }
    console.log(dutchBirds);
    this.birdDataDutch = dutchBirds;
    console.log(this.birdDataDutch);
  }

  openXl(content) {
    console.log(content);
   // this.modalService.open(content, { size: 'xl' });
    this.modalService.open(this.content, { size: 'xl' });
  }
}