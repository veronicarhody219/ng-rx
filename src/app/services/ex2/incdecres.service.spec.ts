import { TestBed } from '@angular/core/testing';

import { IncdecresService } from './incdecres.service';

describe('IncdecresService', () => {
  let service: IncdecresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncdecresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
