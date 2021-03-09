import { inject, TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard],
    });
  });

  it('should ...', inject([AuthGuard], async (guard: AuthGuard): Promise<void> => {
    return expect(guard)
      .toBeTruthy();
  }));
});
