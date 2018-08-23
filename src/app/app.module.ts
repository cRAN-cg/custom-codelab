import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimengModule } from './primeng/primeng.module';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContentContainerComponent } from './app-container/content-container/content-container.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { HeaderComponent } from './app-container/content-container/header/header.component';
import { FooterComponent } from './app-container/content-container/footer/footer.component';
import { DrawerContainerComponent } from './app-container/drawer-container/drawer-container.component';
import { DrawerContentComponent } from './app-container/drawer-container/drawer-content/drawer-content.component';
import { MetadataComponent } from './app-container/drawer-container/metadata/metadata.component';
import { ContentComponent } from './app-container/content-container/content/content.component';
import { ContentMaskComponent } from './app-container/content-container/content-mask/content-mask.component';
import { ControlsComponent } from './app-container/content-container/footer/controls/controls.component';
import {NavigationService} from './services/navigation.service';
import { CodelabStepComponent } from './app-container/content-container/content/codelab-step/codelab-step.component';
import { ToolbarComponent } from './app-container/content-container/header/toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentContainerComponent,
    AppContainerComponent,
    HeaderComponent,
    FooterComponent,
    DrawerContainerComponent,
    DrawerContentComponent,
    MetadataComponent,
    ContentComponent,
    ContentMaskComponent,
    ControlsComponent,
    CodelabStepComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    PrimengModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
