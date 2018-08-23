import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {MatVerticalStepper} from '@angular/material';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { LayoutService } from './services/layout.service';
import { Slide } from './model-classes/slide';

export interface LayoutMode {
  HANDSET: boolean;
  WEB: boolean;
}

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

  slides: Slide[];
  layoutMode: LayoutMode;

  constructor(private layoutChangeService: LayoutService) {
  }

  ngOnInit() {
    this.layoutChangeService.layoutChanges.subscribe(
      result => {
        this.layoutMode = {
          'HANDSET': result.matches,
          'WEB': !result.matches };
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
