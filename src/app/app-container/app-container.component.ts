import { Component, OnInit, ViewChild, ViewChildren, QueryList, ContentChild, AfterContentInit, OnDestroy } from '@angular/core';
import { Slide } from '../model-classes/slide';
import { LayoutService } from '../services/layout.service';
import { LayoutMode } from '../app.component';
import { ToolbarComponent } from './content-container/header/toolbar/toolbar.component';
import { Subscription } from 'rxjs';
import { NavigationService } from '../services/navigation.service';

export const INITIAL_VALUE_OF_INDEX = 0;
@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit, OnDestroy {
  @ContentChild(ToolbarComponent) toolbarComponent: ToolbarComponent;
  slides: Slide[] = [];

  layoutMode: LayoutMode;
  sideNavDrawerClickSubscription$: Subscription;
  showSideNavDrawer: boolean;
  layoutChangeSubscription$: Subscription;

  constructor(private layoutChangeService: LayoutService,
  private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.initMethod();
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }

  private initMethod(): any {
    this.layoutChangeSubscription$ = this.layoutChangeService.layoutChanges.subscribe(
      result => {
        this.layoutMode = {
          'HANDSET': result.matches,
          'WEB': !result.matches
        };
        this.showSideNavDrawer = this.showSideNavDrawer && this.layoutMode.HANDSET;
      }
    );

    this.sideNavDrawerClickSubscription$ = this.navigationService.sideNavDrawerClicked$.subscribe(
      isSideNaveDrawerClicked => {
        this.showSideNavDrawer = isSideNaveDrawerClicked;
      }
    );
    this.slides.push(
      { 'title': 'Doggo', stepNumber: 0 },
      { 'title': 'Mocha', stepNumber: 1 },
      { 'title': 'Nato', stepNumber: 2 });
  }

  sideNavDrawerClose(event: any): void {
    this.navigationService.sideNavDrawerIsClicked(false);
  }

  sideNaveDrawerOpen(event: any): void {
    this.navigationService.sideNavDrawerIsClicked(true);
  }
  private onDestroy(): void {
    if (this.sideNavDrawerClickSubscription$) {
      this.sideNavDrawerClickSubscription$.unsubscribe();
    }
    if (this.layoutChangeSubscription$) {
      this.layoutChangeSubscription$.unsubscribe();
    }
  }

}
