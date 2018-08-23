import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutMode } from '../../../../app.component';
import { LayoutService } from 'src/app/services/layout.service';
import { NavigationService } from '../../../../services/navigation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  layoutMode: LayoutMode;
  layoutChangeSubscription$: Subscription;

  constructor(private layoutChangeService: LayoutService,
    private navigationService: NavigationService) { }

  ngOnInit() {
    this.initMethod();
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }

  showDrawer() {
    this.navigationService.sideNavDrawerIsClicked(true);
  }

  toReturnToHomepage(event: any): void {
    console.log('Hi returning home');
  }

  private initMethod() {
    this.layoutChangeSubscription$ = this.layoutChangeService.layoutChanges.subscribe(
      result => {
        this.layoutMode = {
          'HANDSET': result.matches,
          'WEB': !result.matches
        };
      }
    );
  }

  private onDestroy(): any {
    if (this.layoutChangeSubscription$) {
      this.layoutChangeSubscription$.unsubscribe();
    }
  }
}
