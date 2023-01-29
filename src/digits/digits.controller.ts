import { Body, Controller, Get, Post } from '@nestjs/common';
import { DigitsService } from './digits.service';

@Controller('digits')
export class DigitsController {
  constructor(private readonly digitsService: DigitsService) {}

  @Get()
  getAllDigits() {
    return this.digitsService.getAllDigits();
  }

  @Post()
  setNewDigit(@Body('digit') digit: number) {
    return this.digitsService.setNewDigit(digit);
  }
}
