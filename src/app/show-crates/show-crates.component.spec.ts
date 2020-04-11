import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCratesComponent } from './show-crates.component';

describe('ShowCratesComponent', () => {
  let component: ShowCratesComponent;
  let fixture: ComponentFixture<ShowCratesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCratesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
