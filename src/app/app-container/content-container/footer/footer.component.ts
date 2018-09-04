import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Slide } from '../../../model-classes/slide';
import { LayoutService } from '../../../services/layout.service';
import { LayoutMode } from '../../../app.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  @Input() slides: Slide[];
  layoutMode: LayoutMode;
  layoutServiceSubscriber$: Subscription;
  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.initComponent();
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }

  private initComponent(): void {
    this.layoutServiceSubscriber$ = this.layoutService.layoutChanges.subscribe(
      result => {
        this.layoutMode = {
          HANDSET: result.matches,
          WEB: !result.matches
        };
      }
    );
  }

  private onDestroy(): void {
    if (this.layoutServiceSubscriber$) {
      this.layoutServiceSubscriber$.unsubscribe();
    }
  }
}
