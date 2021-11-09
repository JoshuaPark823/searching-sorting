import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortMainComponent } from './sort-main.component';

describe('SortMainComponent', () => {
  let component: SortMainComponent;
  let fixture: ComponentFixture<SortMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
