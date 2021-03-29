import { ViewChild,Component, OnInit, NgZone } from '@angular/core';
import { BirdnetService } from 'src/app/core/services/birdnet.service';
import { ClarityModule } from '@clr/angular';
import { ClrLoadingState } from '@clr/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-birdnet',
  templateUrl: './birdnet.component.html',
  styleUrls: ['./birdnet.component.scss']
})
export class BirdnetComponent implements OnInit {
  fileToUpload: File = null;
  public files: any[] = [];
  public lastResponse: Object;
  public lastBytes: object;
  public birdTypeList: object[];

  public submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  }, Validators.required);

  constructor(private birdnetService: BirdnetService, public snackBar: MatSnackBar,
    private zone: NgZone) { }

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
     this.lastResponse = returnFunction;
     
     this.snackBar.open("Het bestand is succesvol geladen!", 'Sluiten', {
      duration: 4000,
     });
    });
  }else{
    this.submitBtnState = ClrLoadingState.DEFAULT;
  } 
}
onFileChange(files: FileList){
  this.fileToUpload = files.item(0);
  this.snackBar.open("Het bestand wordt geladen!", 'Sluiten', {
    duration: 2000,
  });

  this.uploadFileToActivity();
  
}

}
