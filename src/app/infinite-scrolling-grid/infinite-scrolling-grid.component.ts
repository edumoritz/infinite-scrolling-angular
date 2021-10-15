import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scrolling-grid',
  template: `
    <section
      class="grid"
      infiniteScroll
      [scrollWindow]="false"
      (scrolled)="onScroll()"
    >
      <span class="hint">Total count: {{ items.length }} </span>

      <div class="card" *ngFor="let item of items">{{ item }}</div>
    </section>
  `,
  styleUrls: ['./infinite-scrolling-grid.component.css'],
})
export class InfiniteScrollingGridComponent implements OnInit {
  items = Array.from({ length: 20 }).map((_, i) => `Item #${i}`);
  constructor() {}

  ngOnInit(): void {}

  onScroll() {
    const newElements = Array.from({ length: 20 }).map(
      (_, i) => `Item #${i + this.items.length}`
    );
    this.items.push(...newElements);
  }
}
