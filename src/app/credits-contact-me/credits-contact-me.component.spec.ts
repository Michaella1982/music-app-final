import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsContactMeComponent } from './credits-contact-me.component';

describe('CreditsContactMeComponent', () => {
  let component: CreditsContactMeComponent;
  let fixture: ComponentFixture<CreditsContactMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditsContactMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsContactMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
