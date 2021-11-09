import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-main',
  templateUrl: './sort-main.component.html',
  styleUrls: ['./sort-main.component.scss']
})
export class SortMainComponent implements OnInit {

  data: number[] = [];

  constructor() { }

  ngOnInit(): void {
    for(let i = 1; i <= 100; i++) {
      this.data.push(i);
    }
  }

}
