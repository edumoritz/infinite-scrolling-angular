import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollingGridComponent } from './infinite-scrolling-grid/infinite-scrolling-grid.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollingGridComponent } from './virtual-scrolling-grid/virtual-scrolling-grid.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    InfiniteScrollModule,
    NoopAnimationsModule,
    ScrollingModule
  ],
  declarations: [
    AppComponent,
    InfiniteScrollingGridComponent,
    VirtualScrollingGridComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
