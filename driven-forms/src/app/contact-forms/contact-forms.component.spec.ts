import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormsComponent } from './contact-forms.component';

describe('ContactFormsComponent', () => {
  let component: ContactFormsComponent;
  let fixture: ComponentFixture<ContactFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
