import { AnimationBuilder } from '@angular/animations';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AnimateDirective } from 'src/app/directives/animate.directive';

@Component({
  selector: 'app-sort-view',
  templateUrl: './sort-view.component.html',
  styleUrls: ['./sort-view.component.scss']
})
export class SortViewComponent implements OnInit {

  sortableItems = [0, 1, 2, 3, 4, 5];

  @ViewChildren(AnimateDirective) items!:QueryList<AnimateDirective>

  data:any[]=[
    {name:'one',value:1},
    {name:'two',value:2},
    {name:'three',value:3},
    {name:'four',value:4}
  ]

  constructor(private builder: AnimationBuilder) { }

  ngOnInit(): void {

  }

  swap(index1: any, index2: any): void {
    [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
  }

  triggerAnimation() {
    // this.data=this.data.map(x=>({item:x,value:Math.random()})).sort((a,b)=>a.value-b.value).map(x=>x.item)
    this.swap(1, 3);
    this.items.forEach( x => x.animateGo())
  }
}
