import { TestBed } from '@angular/core/testing';

import { ProfilsService } from './Service/profils.service';

describe('ProfilsService', () => {
  let service: ProfilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
