import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSSCookieComponent } from './ng-sscookie.component';

describe('NgSSCookieComponent', () => {
  let component: NgSSCookieComponent;
  let fixture: ComponentFixture<NgSSCookieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSSCookieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSSCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
