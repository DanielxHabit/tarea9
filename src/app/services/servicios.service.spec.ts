import { TestBed } from '@angular/core/testing';

import { servicios } from './servicios.service';

describe('servicios', () => {
  let service: servicios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(servicios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
