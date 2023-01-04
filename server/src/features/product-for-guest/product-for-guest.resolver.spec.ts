import { Test, TestingModule } from '@nestjs/testing';
import { ProductForGuestResolver } from './product-for-guest.resolver';

describe('ProductForGuestResolver', () => {
  let resolver: ProductForGuestResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductForGuestResolver],
    }).compile();

    resolver = module.get<ProductForGuestResolver>(ProductForGuestResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
