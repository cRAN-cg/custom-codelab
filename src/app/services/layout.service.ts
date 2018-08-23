import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  layoutChanges: Observable<BreakpointState>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.layoutChanges = breakpointObserver.observe([
      Breakpoints.Handset
    ]);
  }
}
