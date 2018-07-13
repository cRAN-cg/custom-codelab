import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  // Observable number sources
  private controlButtonClickedSource = new Subject<number>();
  private stepperComponentClickedSource = new Subject<number>();

  // Observable number streams
  buttonClicked$ = this.controlButtonClickedSource.asObservable();
  stepperComponentSelected$ = this.stepperComponentClickedSource.asObservable();

  // Service methods
  buttonIsClickedForStep(stepNumber: number) {
    this.controlButtonClickedSource.next(stepNumber);
  }
  stepperIsSelectedWithStepNumber(stepNumber: number) {
    this.stepperComponentClickedSource.next(stepNumber);
  }
  constructor() { }
}
