import { TestBed } from '@angular/core/testing';

import { AlumnosService } from './AlumnosService';

describe('ApiService', () => {
  let service: AlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
