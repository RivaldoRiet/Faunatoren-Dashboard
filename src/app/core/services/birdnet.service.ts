import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class BirdnetService {
  private readonly baseUri: string = environment.birdnetAPI;
  constructor(public http: HttpClient) {}

  postFile(fileToUpload: File) {
    const formData: FormData = new FormData();
    formData.append('audioData', fileToUpload, fileToUpload.name);

  this.http.post(`http://localhost:3000/upload`, formData).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
}

/*
  send (audioFile: File) {
    const formData: FormData = new FormData();
    formData.append('file', audioFile, audioFile.name);
    return this.http.post(this.postUrl, formData);
  }

  getAudio (fileName: string) {
    return this.http.get(this.fetchAudioUrl + fileName, { responseType: 'blob'});
  } */

  /**
   * Gets the url appending the base uri before it.
   * @param url The (relative) uri.
   */
   private getUri(url: string): string {
    if (url.startsWith('http')) {
      return url;
    }

    if (url.startsWith('/')) {
      url = url.substr(0, 1);
    }

    return `${this.baseUri}${url}`;
  }
}