import {Component, OnInit} from '@angular/core';
import {Slide} from '../model-classes/slide';

export const INITIAL_VALUE_OF_INDEX = 0;
@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {
  slides: Slide[] = [];

  constructor() {
  }

  ngOnInit() {
    this.slides.push(
      {'title': 'Doggo', stepNumber: 0},
      {'title': 'Mocha', stepNumber: 1},
      {'title': 'Nato', stepNumber: 2});
  }

}
