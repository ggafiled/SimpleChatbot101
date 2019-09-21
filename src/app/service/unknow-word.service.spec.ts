import { TestBed } from '@angular/core/testing';

import { UnknowWordService } from './unknow-word.service';

describe('UnknowWordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnknowWordService = TestBed.get(UnknowWordService);
    expect(service).toBeTruthy();
  });
});
