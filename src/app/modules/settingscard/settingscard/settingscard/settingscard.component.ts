import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CivityService } from 'src/app/core/services/civity.service';
import { WikipediaService } from 'src/app/core/services/wikipedia.service';
import { faInfo, faWrench, faCog } from '@fortawesome/free-solid-svg-icons';
import { OverzichtComponent } from 'src/app/modules/overzicht/overzicht/overzicht.component';
import { DatabaseData } from 'src/app/shared/models/DatabaseData';
import { CardComponent } from 'src/app/modules/card/card/card.component';

@Component({
  selector: 'app-settingscard',
  templateUrl: './settingscard.component.html',
  styleUrls: ['./settingscard.component.scss']
})
export class SettingscardComponent implements OnInit {
  closeResult = '';
  isLoading = false;
  civity;
  birdData;
  birdDataDutch: any[];
  @Input() databaseData: DatabaseData;
  @ViewChild(OverzichtComponent) overzichtComponent: OverzichtComponent;

  @ViewChild('content', { static: false }) private content;
  faInfo = faInfo;
  faWrench = faWrench;
  faCog = faCog;
  
  max = 48;
  vogelTimer = {
    currentTime: 1
  };

  constructor(private modalService: NgbModal, private civityService: CivityService, 
    private wikiService : WikipediaService, private cd: ChangeDetectorRef) { }

    ngOnChanges(changes: any) {
   }

  ngOnInit() {
    this.databaseData = this.civityService.databaseData;
  }

  ngAfterViewInit() {
    //this.refreshData(this.vogelTimer.currentTime);
    //this.modalService.open(this.content, { size: 'xl' });
  }

  changeDate()
  {
    if (typeof this.databaseData.startDate !== 'undefined') {
      const startDate = new Date(this.databaseData.startDate);
    }
    if (typeof this.databaseData.endDate !== 'undefined') {
      const endDate = new Date(this.databaseData.endDate);
    }
   
  }

  refreshData(currentTime)
  {
    if (currentTime < 1) {
      return;
    }
    this.isLoading = true;
    this.civityService.getCivityData('testhok1_BIRD', 500, this.vogelTimer.currentTime).subscribe(data => {
      this.civity = data;
      this.buildBirdData();
      this.isLoading = false;
   }, err => { console.log(err)
  });
  }

reloadData(pastHours, amountOfRecords)
{
  this.civityService.databaseData.pastHours = pastHours;
  this.civityService.databaseData.records = amountOfRecords;

  pastHours = parseInt(pastHours);
  amountOfRecords = parseInt(amountOfRecords);
  if (pastHours < 1) {
    return;
  }

  if (amountOfRecords < 1) {
    return;
  }
  this.overzichtComponent.reloadData(amountOfRecords, pastHours);
}

reloadDataDismiss(pastHours, amountOfRecords)
{
  this.civityService.databaseData.pastHours = pastHours;
  this.civityService.databaseData.records = amountOfRecords;

  pastHours = parseInt(pastHours);
  amountOfRecords = parseInt(amountOfRecords);
  if (pastHours < 1) {
    return;
  }

  if (amountOfRecords < 1) {
    return;
  }
  this.overzichtComponent.reloadData(amountOfRecords, pastHours);
  this.modalService.dismissAll();
}

dismissModal()
{
  this.isLoading = true;
  this.civityService.getCivityData('testhok1_BIRD', 500, this.vogelTimer.currentTime).subscribe(data => {
    (async () => { 
    this.civity = data;
    this.buildBirdData();
    await this.delay(1000);
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

    this.birdData = sortedBirdArray.slice(0, 5);

    let dutchBirds: any[] = [];
    dutchBirds = [...dutchBirds];
    for (const bird of sortedBirdArray) {
      this.wikiService.getDutchWikiDescription(bird.name.toString()).subscribe(data => {
        const result = {name: data.displaytitle, value: bird.value};
        dutchBirds.push(result);
      });
    }
    this.birdDataDutch = dutchBirds;
  }

  openXl(content) {
    this.modalService.open(this.content, { size: 'xl' });
  }
}