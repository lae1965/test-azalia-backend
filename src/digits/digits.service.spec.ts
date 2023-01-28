import { Test, TestingModule } from '@nestjs/testing';
import { DigitsService } from './digits.service';

describe('DigitsService', () => {
  let service: DigitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DigitsService],
    }).compile();

    service = module.get<DigitsService>(DigitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
