import { Test, TestingModule } from '@nestjs/testing';
import { SoldResolver } from './sold.resolver';

describe('SoldResolver', () => {
  let resolver: SoldResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoldResolver],
    }).compile();

    resolver = module.get<SoldResolver>(SoldResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
