import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectableListComponent } from './collectable-list.component';

describe('CollectableListComponent', () => {
  let component: CollectableListComponent;
  let fixture: ComponentFixture<CollectableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
