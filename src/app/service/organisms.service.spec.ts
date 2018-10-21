import { TestBed, inject } from '@angular/core/testing';

import { OrganismsService } from './organisms.service';

describe('OrganismsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganismsService]
    });
  });

  it('should be created', inject([OrganismsService], (service: OrganismsService) => {
    expect(service).toBeTruthy();
  }));
});
