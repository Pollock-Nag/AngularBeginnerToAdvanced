import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedformComponent } from './nestedform.component';

describe('NestedformComponent', () => {
  let component: NestedformComponent;
  let fixture: ComponentFixture<NestedformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
