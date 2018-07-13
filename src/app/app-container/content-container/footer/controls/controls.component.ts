import {
  Component, EventEmitter, Input, OnDestroy, OnInit, Output
} from '@angular/core';
import {NavigationService} from '../../../../navigation.service';
import {Slide} from '../../../../slide';
import {INITIAL_VALUE_OF_INDEX} from '../../../app-container.component';



@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent implements OnInit, OnDestroy {
  activeIndex: number;

  @Input() slides: Slide[];

  constructor(private navigationService: NavigationService) {
    navigationService.stepperComponentSelected$.subscribe(
      stepNumber => {
        this.updateControlButton(stepNumber);
      }
    );
  }

  ngOnInit() {
    this.activeIndex = INITIAL_VALUE_OF_INDEX;
  }

  move(index: number) {
    if (index === this.slides.length) {
      index = 0;
    }
    this.activeIndex = index;
    this.navigationService.buttonIsClickedForStep(index);
  }

  private updateControlButton(stepNumber: number) {
    // Maintaining states of buttons
    // Logic for showing Next And Previous Button
    this.activeIndex = stepNumber;
  }

  ngOnDestroy(): void {
  }
}
