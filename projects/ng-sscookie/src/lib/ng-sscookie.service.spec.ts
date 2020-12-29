import { TestBed } from '@angular/core/testing';

import { NgSSCookieService } from './ng-sscookie.service';

describe('NgSSCookieService', () => {
  let service: NgSSCookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSSCookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
