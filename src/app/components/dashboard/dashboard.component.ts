import { Component, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; 
import { DataService } from '../../services/data.service';
import { Data } from '../../models/data.model';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dataset: Observable<Data[]>;
  public cols: Observable<number>;
  public cardWidth: number;
  public cardHeight: number;
  public gutterSize: number;
  public listMargin: number;
  public rowHeight: number;
  public colspan: string | number;
  public rowspan: string | number;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dataService: DataService
  ) {
    this.dataset = this.dataService.dataset;
    this.cols = this.getColsByBreakpoint();
    this.cardWidth = 250;
    this.cardHeight = 300;
    this.gutterSize = 16;
    this.listMargin = this.gutterSize * 2;
    this.rowHeight = this.cardHeight + (this.gutterSize * 2);
    this.colspan = 1;
    this.rowspan = 1;
  };

  ngOnInit() {
    console.log('Dataset: ', this.dataset);
  }

  // Based on the screen size, switch from standard to one column per row
  private getColsByBreakpoint() {
    return this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
      ]).pipe(
      map((result) => {
        if (result.breakpoints[Breakpoints.XSmall]) { return 1; }
        if (result.breakpoints[Breakpoints.Small])  { return 2; }
        if (result.breakpoints[Breakpoints.Medium]) { return 4; }
        if (result.breakpoints[Breakpoints.Large])  { return 5; }
        if (result.breakpoints[Breakpoints.XLarge]) { return 6; }
      })
    );
  }

}
