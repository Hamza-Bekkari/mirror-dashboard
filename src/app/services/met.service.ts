import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MetService {
  private root = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";
  private pathend = "";

  constructor(private http: HttpClient) {
  }

  public getImageUrl() {
    const objectId = this.randomInt(100, 999);
    const objectPath = this.root + objectId + this.pathend;
    return this.http.get(objectPath);
  }

  private randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
