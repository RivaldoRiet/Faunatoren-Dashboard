import { Component, OnInit } from '@angular/core';
import { BirdnetService } from 'src/app/core/services/birdnet.service';

@Component({
  selector: 'app-birdnet',
  templateUrl: './birdnet.component.html',
  styleUrls: ['./birdnet.component.scss']
})
export class BirdnetComponent implements OnInit {
  fileToUpload: File = null;
  constructor(private birdnetService: BirdnetService) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

uploadFileToActivity() {
  this.birdnetService.postFile(this.fileToUpload);
}

}
