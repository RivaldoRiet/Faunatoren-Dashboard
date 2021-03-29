import { ViewChild,Component, OnInit, NgZone } from '@angular/core';
import { BirdnetService } from 'src/app/core/services/birdnet.service';
import { ClarityModule } from '@clr/angular';
import { ClrLoadingState } from '@clr/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Prediction } from 'src/app/shared/models/prediction';

@Component({
  selector: 'app-birdnet',
  templateUrl: './birdnet.component.html',
  styleUrls: ['./birdnet.component.scss']
})
export class BirdnetComponent implements OnInit {
  fileToUpload: File = null;
  public files: any[] = [];
  public lastResponse: any;
  public lastBytes: object;
  public birdTypeList: object;
  public shouldShow: boolean = false;
  isLoading = false;
  public predictionlist: Prediction[] = [];
  stringJson: any;
  stringObject: any;
  predictionObjects: any[] = [];
  result = [];
  chartSize = [1470, 450];
  public submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  }, Validators.required);

  constructor(private birdnetService: BirdnetService, public snackBar: MatSnackBar,
    private zone: NgZone) { 
      
    }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

uploadFileToActivity() {
  this.submitBtnState = ClrLoadingState.LOADING;
  
  if (this.fileToUpload != null) {
    this.birdnetService.postFile(this.fileToUpload, (returnFunction) => {
     console.log(returnFunction);
     this.submitBtnState = ClrLoadingState.SUCCESS;
     this.lastResponse =JSON.parse(returnFunction);

     this.birdTypeList = this.lastResponse.prediction;


     var count = Object.keys(this.lastResponse.prediction).length;


      for (var i = 0; i < count; i++){
        console.log(Number(this.lastResponse.prediction[i].score));

        console.log(this.lastResponse.prediction[i].score);
        this.predictionlist.push(Prediction.deserialize(this.lastResponse.prediction[i].species.split(";")[0],  (Number(this.lastResponse.prediction[i].score) * 100)));
      }
     console.log(this.predictionlist);



     // console.log(this.predictionlist);
     

     this.shouldShow = true;
     this.isLoading = false;
     this.snackBar.open("Het bestand is succesvol geladen!", 'Sluiten', {
      duration: 4000,
     });
    });
  }else{
    this.shouldShow = false;
    this.isLoading = false;
    this.submitBtnState = ClrLoadingState.DEFAULT;
  } 
}
onFileChange(files: FileList){
  this.fileToUpload = files.item(0);
  this.snackBar.open("Het bestand wordt geladen!", 'Sluiten', {
    duration: 2000,
  });
  this.shouldShow = false;
  this.predictionlist = [];
  this.isLoading = true;
  this.uploadFileToActivity();
}


}
