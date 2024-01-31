import { Test, TestingModule } from '@nestjs/testing';
import { CarOrgService } from './hotel.service';

describe('CarOrgService', () => {
  let service: CarOrgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarOrgService],
    }).compile();

    service = module.get<CarOrgService>(CarOrgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
