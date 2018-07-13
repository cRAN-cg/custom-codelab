import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatVerticalStepper} from '@angular/material';
import {NavigationService} from '../../../navigation.service';
import {Slide} from '../../../slide';

@Component({
  selector: 'app-drawer-content',
  templateUrl: './drawer-content.component.html',
  styleUrls: ['./drawer-content.component.css'],
})
export class DrawerContentComponent implements OnInit, OnDestroy {
  @Input() slides: Slide[];
  @ViewChild('stepper') stepper: MatVerticalStepper;
  menuActive = true;

  constructor(private navigationService: NavigationService) {
    this.navigationService.buttonClicked$.subscribe(
      stepNumber => {
        this.stepper.selectedIndex = stepNumber;
      }
    );
  }

  ngOnInit() {
    this.stepper.selectionChange.subscribe(
      data => {
        this.navigationService.stepperIsSelectedWithStepNumber(data.selectedIndex);
        console.log({data});
      }
    );
  }

  // Prevent memory leaks
  ngOnDestroy(): void {
  }

}
