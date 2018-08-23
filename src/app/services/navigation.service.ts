import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }
  // Observable sources for registering slide number
  private controlButtonClickedSource = new Subject<number>();
  private stepperComponentClickedSource = new Subject<number>();

  // Observable source for side nav drawer click
  private sideNavDrawerClickSource = new Subject<boolean>();

  // Observable number streams
  buttonClicked$ = this.controlButtonClickedSource.asObservable();
  stepperComponentSelected$ = this.stepperComponentClickedSource.asObservable();
  sideNavDrawerClicked$ = this.sideNavDrawerClickSource.asObservable();

  // Service methods
  buttonIsClickedForStep(stepNumber: number) {
    this.controlButtonClickedSource.next(stepNumber);
  }
  stepperIsSelectedWithStepNumber(stepNumber: number) {
    this.stepperComponentClickedSource.next(stepNumber);
  }
  sideNavDrawerIsClicked(clicked: boolean) {
    this.sideNavDrawerClickSource.next(clicked);
  }
}
