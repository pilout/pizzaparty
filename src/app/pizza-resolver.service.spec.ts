import { TestBed } from '@angular/core/testing';

import { PizzaResolverService } from './pizza-resolver.service';

describe('PizzaResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaResolverService = TestBed.get(PizzaResolverService);
    expect(service).toBeTruthy();
  });
});
