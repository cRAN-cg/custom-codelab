import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from "primeng/primeng";
import {StepsModule} from 'primeng/steps';


@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    StepsModule
  ],
  exports: [
    SidebarModule,
    StepsModule
  ],
  declarations: []
})
export class PrimengModule { }
