import {Component, Input, OnInit} from '@angular/core';
import {Slide} from '../../slide';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit {

  @Input() slides: Slide[];
  constructor() { }

  ngOnInit() {
  }

}
