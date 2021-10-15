import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual-scrolling-grid',
  template: `    
    <section class="grid">
      <cdk-virtual-scroll-viewport itemSize="65" class="example-viewport">
        <div *cdkVirtualFor="let item of items" class="card">{{ item }}</div>
      </cdk-virtual-scroll-viewport>
    </section>
  `,
  styleUrls: ['./virtual-scrolling-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollingGridComponent {
  @ViewChild(CdkVirtualScrollViewport) scroll: CdkVirtualScrollViewport;
  items = Array.from({ length: 10000 }).map((_, i) => `Item #${i}`);

  constructor() {}
}
