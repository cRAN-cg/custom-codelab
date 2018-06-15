import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, Subscriber, from, Observer } from 'rxjs';
import { MenuItem, Message } from 'primeng/api';
import { MatStepper, MatVerticalStepper } from '@angular/material';
import {trigger,state,style,transition,animate} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    "../../node_modules/primeng/resources/themes/omega/theme.css",
    "../../node_modules/primeng/resources/primeng.min.css",
    "../../node_modules/primeicons/primeicons.css",
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
export class AppComponent implements OnInit {
  menuActive: boolean;
  title = 'custom-codelab';
  mode = new FormControl('over');
  visibleSidebar: boolean = true;
  showMenu: boolean = true;
  slides: Object[] = [];
  showSidebar: boolean = false;
  layoutChanges: Observable<BreakpointState>;
  activeIndex: number = 0;
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
    this.stepper.selectionChange.subscribe(
      data => console.log(data)
    );
    this.slides.push(
      {'name':'Doggo', id : '0'},
      {'name':'Mocha', id : '1'},
      {'name':'Nato', id : '2'});
  }

  onMenuClick(event: Event): void {
    this.menuActive = !this.menuActive;
    event.preventDefault();
  }

  move(index: number) {
    if(index >= this.slides.length) {
      index = 0;
      this.stepper.reset();
    }
    this.stepper.selectedIndex = index;
    this.activeIndex = index;
  }

  onStep(index: number){
    if(!index) {
      this.stepper.reset();
      return;
    }
    this.move(this.stepper.selectedIndex);
  }

}
