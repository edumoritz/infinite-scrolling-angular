import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual-scrolling-grid',
  templateUrl: './virtual-scrolling-grid.component.html',
  styleUrls: ['./virtual-scrolling-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtualScrollingGridComponent {
  @ViewChild(CdkVirtualScrollViewport) scroll: CdkVirtualScrollViewport;
  items = Array.from({ length: 10000 }).map((_, i) => `Item #${i}`);

  constructor() {}
}
