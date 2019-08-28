import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectableItemComponent } from './collectable-item.component';

describe('CollectableItemComponent', () => {
  let component: CollectableItemComponent;
  let fixture: ComponentFixture<CollectableItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectableItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
