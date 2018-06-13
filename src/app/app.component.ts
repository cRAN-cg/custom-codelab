import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, Subscriber, from, Observer } from 'rxjs';
import { MenuItem, Message } from 'primeng/api';
import { MatStepper, MatVerticalStepper } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
  ],
})
export class AppComponent implements OnInit {
  title = 'custom-codelab';
  mode = new FormControl('over');
  visibleSidebar: boolean = true;
  showMenu: boolean = true;
  slides: Object[] = [];
  showSidebar: boolean = true;
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
    this.slides.push(
      {'name':'Doggo', id : '0'},
      {'name':'Mocha', id : '1'},
      {'name':'Nato', id : '2'});
  }

  onMenuClick(event: Event): void {
    this.showSidebar = !this.showSidebar;
    event.preventDefault();
  }

  move(index: number) {
    debugger;
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
