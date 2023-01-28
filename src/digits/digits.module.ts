import { Module } from '@nestjs/common';
import { DigitsService } from './digits.service';
import { DigitsController } from './digits.controller';

@Module({
  controllers: [DigitsController],
  providers: [DigitsService]
})
export class DigitsModule {}
