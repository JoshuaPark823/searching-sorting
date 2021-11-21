import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-view',
  templateUrl: './sort-view.component.html',
  styleUrls: ['./sort-view.component.scss']
})
export class SortViewComponent implements OnInit {

  sortableItems = [0, 1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {

  }

  test(): void {
    this.swap(1, 4);
  }

  swap(index1: any, index2: any): void {
    [this.sortableItems[index1], this.sortableItems[index2]] = [this.sortableItems[index2], this.sortableItems[index1]]
  }

}
