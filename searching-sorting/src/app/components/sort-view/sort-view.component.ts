import { AnimationBuilder } from '@angular/animations';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AnimateDirective } from 'src/app/directives/animate.directive';

@Component({
  selector: 'app-sort-view',
  templateUrl: './sort-view.component.html',
  styleUrls: ['./sort-view.component.scss']
})
export class SortViewComponent implements OnInit {

  @ViewChildren(AnimateDirective) items!:QueryList<AnimateDirective>

  data:any[]=[
    {name:'one',value:1},
    {name:'two',value:2},
    {name:'three',value:3},
    {name:'four',value:4},
    {name:'five',value:5},
    {name:'six',value:6}
  ]

  constructor(private builder: AnimationBuilder) { }

  ngOnInit(): void {

  }

  test(): void {
    this.swap(0, 2);
  }

  swap(index1: any, index2: any) {
    [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    this.items.forEach( x => x.animateGo());
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
