import { Test, TestingModule } from '@nestjs/testing';
import { CarOrgController } from './car-org.controller';

describe('CarOrgController', () => {
  let controller: CarOrgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarOrgController],
    }).compile();

    controller = module.get<CarOrgController>(CarOrgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
