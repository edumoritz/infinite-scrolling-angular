import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scrolling-grid',
  templateUrl: './infinite-scrolling-grid.component.html',
  styleUrls: ['./infinite-scrolling-grid.component.css']
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
