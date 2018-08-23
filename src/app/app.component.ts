import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable, Subscriber, from, Observer} from 'rxjs';
import {MenuItem, Message} from 'primeng/api';
import {MatStepper, MatVerticalStepper} from '@angular/material';
import {trigger, state, style, transition, animate} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
  ],
  animations: [
    trigger('overlayState', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('visible => hidden', animate('400ms ease-in')),
      transition('hidden => visible', animate('400ms ease-out'))
    ])]

})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('stepper') stepper: MatVerticalStepper;
  private layoutChanges: Observable<BreakpointState>;
  title = 'custom-codelab';
  visibleSidebar = true;
  slides: Object[] = [];

  constructor(breakpointObserver: BreakpointObserver) {
    this.layoutChanges = breakpointObserver.observe([
      Breakpoints.Handset
    ]);
  }

  ngOnInit() {
    this.layoutChanges.subscribe(
      result => {
        this.visibleSidebar = result.matches;
      }
    );
  }


  onStep(index: number) {
    if (!index) {
      this.stepper.reset();
      return;
    }
    // this.move(this.stepper.selectedIndex);
  }

  ngOnDestroy(): void {
  }

}
