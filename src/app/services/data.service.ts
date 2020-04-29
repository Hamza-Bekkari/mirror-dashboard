import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Data } from '../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public dataset = new Observable<Data[]>();
  private test: Data[];

  constructor() {
    this.test = []
    for (let i = 0; i < 10; i++) {
      this.test.push(new Data());
    }
    this.dataset = new Observable((observer) => {
      observer.next(this.test)
      observer.complete()
    });
  }

}
