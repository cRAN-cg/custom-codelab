import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-content-mask',
  templateUrl: './content-mask.component.html',
  styleUrls: ['./content-mask.component.css']
})
export class ContentMaskComponent implements OnInit {
  menuActive: boolean;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
  }

  sideNavDrawerClose(event: any): void {
    this.navigationService.sideNavDrawerIsClicked(false);
  }
}
