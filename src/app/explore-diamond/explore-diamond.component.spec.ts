import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDiamondComponent } from './explore-diamond.component';

describe('ExploreDiamondComponent', () => {
  let component: ExploreDiamondComponent;
  let fixture: ComponentFixture<ExploreDiamondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreDiamondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreDiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
