import { TestBed, inject } from '@angular/core/testing';

import { HelperTypeService } from './helper-type.service';

describe('HelperTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelperTypeService]
    });
  });

  it('should be created', inject([HelperTypeService], (service: HelperTypeService) => {
    expect(service).toBeTruthy();
  }));
});
