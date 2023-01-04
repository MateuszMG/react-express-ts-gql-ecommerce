import { Test, TestingModule } from '@nestjs/testing';
import { ProductForGuestService } from './product-for-guest.service';

describe('ProductForGuestService', () => {
  let service: ProductForGuestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductForGuestService],
    }).compile();

    service = module.get<ProductForGuestService>(ProductForGuestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
