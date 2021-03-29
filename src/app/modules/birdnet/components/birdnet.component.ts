import { ViewChild,Component, OnInit } from '@angular/core';
import { BirdnetService } from 'src/app/core/services/birdnet.service';
import { ClarityModule } from '@clr/angular';
import { ClrLoadingState } from '@clr/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-birdnet',
  templateUrl: './birdnet.component.html',
  styleUrls: ['./birdnet.component.scss']
})
export class BirdnetComponent implements OnInit {
  fileToUpload: File = null;
  public submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public lastJson
  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  }, Validators.required);

  constructor(private birdnetService: BirdnetService) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

uploadFileToActivity() {
  this.submitBtnState = ClrLoadingState.LOADING;
 /* if (this.fileToUpload != null) {
    this.birdnetService.postFile(this.fileToUpload, function(returnFunction) {
     console.log(returnFunction);

    });
  }else{
    this.submitBtnState = ClrLoadingState.DEFAULT;
  } */
}

}
