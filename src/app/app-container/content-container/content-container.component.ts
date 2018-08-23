import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Slide } from '../../model-classes/slide';
import { NavigationService } from '../../services/navigation.service';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit, OnDestroy {

  @Input() slides: Slide[];
  showOverlay: boolean;
  sideNavDrawerClickSubscription$: Subscription;
  layoutChangeSubscription$: Subscription;
  constructor(private navigationService: NavigationService,
    private layoutService: LayoutService) { }

  ngOnInit() {
    this.initComponent();
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }

  private initComponent(): void {
    this.layoutChangeSubscription$ = this.layoutService.layoutChanges.subscribe(
      layoutModeIsHandset => {
        this.showOverlay = layoutModeIsHandset.matches && this.showOverlay;
      }
    );
    this.sideNavDrawerClickSubscription$ = this.navigationService.sideNavDrawerClicked$.subscribe(
      isSideNaveDrawerClicked => {
        this.showOverlay = isSideNaveDrawerClicked;
      }
    );
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
