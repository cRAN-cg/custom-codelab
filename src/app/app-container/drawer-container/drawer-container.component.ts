import {Component, Input, OnInit} from '@angular/core';
import {Slide} from '../../slide';


@Component({
  selector: 'app-drawer-container',
  templateUrl: './drawer-container.component.html',
  styleUrls: ['./drawer-container.component.css']
})
export class DrawerContainerComponent implements OnInit {

  @Input() slides: Slide[];

  constructor() {
  }

  ngOnInit() {
  }

}
