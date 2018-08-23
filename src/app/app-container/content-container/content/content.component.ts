import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Slide} from '../../../model-classes/slide';
import {NavigationService} from '../../../services/navigation.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, OnDestroy {
  @Input() slides: Slide[];

  constructor(private navigationService: NavigationService) {
    this.navigationService.buttonClicked$.subscribe(
      stepData => {
        this.updateLayout(stepData);
      }
    );
    this.navigationService.stepperComponentSelected$.subscribe(
      stepData => {
        this.updateLayout(stepData);
        console.log({stepData});
      }
    );
  }

  ngOnInit() {

    // Initial value of the slide
    this.slides.forEach(slide => {
      if (!slide.stepNumber) {
        slide.show = true;
      } else {
        slide.show = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeObservables();
  }

  private updateLayout(stepData: any): void {
    this.slides.forEach(slide => {
      if (slide.stepNumber === stepData) {
        slide.show = true;
      } else {
        slide.show = false;
      }
    });
  }

  // Prevent memory leaks
  private unsubscribeObservables() {
  }
}
