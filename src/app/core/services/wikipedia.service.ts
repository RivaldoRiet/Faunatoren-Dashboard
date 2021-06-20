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

  getDutchWikiDescription(title: string) {
    let tempTitle = title.replace(' ', '_') + '?redirect=true';
    tempTitle = tempTitle.replace('Human', 'Mens');
   // console.log(tempTitle);
    const baseUrl = 'https://nl.wikipedia.org/api/rest_v1/page/summary/';
    return this.http.get<WikiSummary>(baseUrl+tempTitle);
  }

  getDutchBirdName(birdname: string) {
    birdname = birdname.toLowerCase();
    birdname = birdname.charAt(0).toUpperCase() + birdname.slice(1);
    birdname = encodeURIComponent(birdname);
    birdname = birdname.replace(" ", "_");
    birdname = birdname.replace("-", "_");
    birdname = this.translateAmbigiousName(birdname);
    const baseUrl = 'https://www.wikidata.org/w/api.php?action=wbgetentities&origin=*&format=json&props=labels&languages=nl&titles=' + birdname + '&sites=enwiki';
    //console.log("url: " + baseUrl);
    return this.http.get<RootObject>(baseUrl);
  }

  translateAmbigiousName(name)
  {
    if (name == "Fluiter") {
      return name + "_(vogel)";
    }
    return name;
  }
}

export interface Nl {
  language: string;
  value: string;
}

export interface Labels {
  nl: Nl;
}

export interface Q25307 {
  type: string;
  id: string;
  labels: Labels;
}

export interface Entities {
  Q25307: Q25307;
}

export interface RootObject {
  entities: Entities;
  success: number;
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