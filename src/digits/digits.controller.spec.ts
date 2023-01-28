import { Test, TestingModule } from '@nestjs/testing';
import { DigitsController } from './digits.controller';
import { DigitsService } from './digits.service';

describe('DigitsController', () => {
  let controller: DigitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DigitsController],
      providers: [DigitsService],
    }).compile();

    controller = module.get<DigitsController>(DigitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
