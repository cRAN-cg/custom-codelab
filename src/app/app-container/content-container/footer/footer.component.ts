import {Component, Input, OnInit} from '@angular/core';
import {Slide} from '../../../model-classes/slide';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() slides: Slide[];
  constructor() { }

  ngOnInit() {
  }

}
