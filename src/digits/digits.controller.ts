import { Controller } from '@nestjs/common';
import { DigitsService } from './digits.service';

@Controller('digits')
export class DigitsController {
  constructor(private readonly digitsService: DigitsService) {}
}
