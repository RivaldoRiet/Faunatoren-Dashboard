import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { observable, Observable } from 'rxjs';

@Injectable()
export class WikipediaService {
  private readonly baseUri: string = environment.birdnetAPI;
  constructor(public http: HttpClient) {}

  getWikiDescription(title: string) {
    const tempTitle = title.replace(' ', '_') + '?redirect=true';
    const baseUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
    return this.http.get<WikiSummary>(baseUrl+tempTitle);
  }
  
}

export class WikiSummary {
    type?:          string;
    title?:         string;
    displaytitle?:  string;
   // namespace?:     Namespace;
    wikibase_item?: string;
    //titles?:        Titles;
    pageid?:        number;
    thumbnail?:     Originalimage;
   // originalimage?: Originalimage;
    lang?:          string;
    dir?:           string;
    revision?:      string;
    tid?:           string;
    timestamp?:     Date;
    description?:   string;
    //content_urls?:  ContentUrls;
    //api_urls?:      APIUrls;
    extract?:       string;
    extract_html?:  string;
  }

  export class Originalimage {
    height?:          string;
    width?:         string;
    source?:  string;
  }