import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-main',
  templateUrl: './grid-main.component.html',
  styleUrls: ['./grid-main.component.scss']
})
export class GridMainComponent implements OnInit {

  grid: boolean[][] = [];
  gridWidth: number = 25;
  gridHeight: number = 25;

  constructor() { 
    this.generateGrid();
  }

  ngOnInit(): void {
    this.generateGrid();
  }

  generateGrid(): void{
      for(var i: number = 0; i < this.gridWidth; i++) {
          this.grid[i] = [];
          for(var j: number = 0; j< this.gridHeight; j++) {
              this.grid[i][j] = true;
          }
      }
  }
}
