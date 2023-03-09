import { TestBed } from '@angular/core/testing';

import { AdminAccessLoadGuard } from './admin-access-load.guard';

describe('AdminAccessLoadGuard', () => {
  let guard: AdminAccessLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminAccessLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
