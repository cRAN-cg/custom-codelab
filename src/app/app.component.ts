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
    '../../node_modules/primeng/resources/themes/omega/theme.css',
    '../../node_modules/primeng/resources/primeng.min.css',
    '../../node_modules/primeicons/primeicons.css',
    './app.component.css',
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
  menuActive: boolean;
  title = 'custom-codelab';
  mode = new FormControl('over');
  visibleSidebar = true;
  showMenu = true;
  slides: Object[] = [];
  showSidebar = false;
  layoutChanges: Observable<BreakpointState>;
  activeIndex = 0;
  @ViewChild('stepper') stepper: MatVerticalStepper;

  constructor(breakpointObserver: BreakpointObserver) {
    this.layoutChanges = breakpointObserver.observe([
      Breakpoints.Web
    ]);
  }

  ngOnInit() {
    this.layoutChanges.subscribe(
      result => {
        this.visibleSidebar = result.matches ? true : false;
        this.showSidebar = this.visibleSidebar;
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
