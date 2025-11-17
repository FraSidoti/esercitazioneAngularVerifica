import { TestBed } from '@angular/core/testing';

import { TempoAtmosferico } from './tempo-atmosferico';

describe('TempoAtmosferico', () => {
  let service: TempoAtmosferico;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempoAtmosferico);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
