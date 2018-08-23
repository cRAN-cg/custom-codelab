import {Component, Input, OnInit} from '@angular/core';
import {Slide} from '../../../../model-classes/slide';

@Component({
  selector: 'app-codelab-step',
  templateUrl: './codelab-step.component.html',
  styleUrls: ['./codelab-step.component.css']
})
export class CodelabStepComponent implements OnInit {

  @Input() slide: Slide;
  constructor() { }

  ngOnInit() {
  }

}
