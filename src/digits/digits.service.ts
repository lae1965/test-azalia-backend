import { CreateDigitsDto } from './DTO/digits.CreateDTO';
import { Injectable } from '@nestjs/common';
import { join } from 'path';
import * as fs from 'fs';

@Injectable()
export class DigitsService {
  filePath = join('public', 'digits.txt');

  private makeDigitsList(digitsArray: string[]): CreateDigitsDto[] {
    const digitsArrayReverse = [...digitsArray].reverse();
    const digitsList: CreateDigitsDto[] = [];
    let prev: number | null = null;
    digitsArrayReverse.forEach((strDigit) => {
      let middle: number;
      const cur = +strDigit;
      if (prev === null) {
        middle = cur;
      } else {
        middle = (prev + cur) / 2;
      }
      digitsList.unshift({ prev, cur, middle });
      prev = cur;
    });
    return digitsList;
  }

  getAllDigits(): CreateDigitsDto[] {
    if (!fs.existsSync(this.filePath)) return [];
    const data = fs.readFileSync(this.filePath, 'utf8');
    const digitsArray = data.split(';');
    return this.makeDigitsList(digitsArray);
  }

  setNewDigit(digit: number): CreateDigitsDto[] {
    let digitsArray: string[];
    if (fs.existsSync(this.filePath)) {
      const data = fs.readFileSync(this.filePath, 'utf8');
      digitsArray = data.split(';');
    } else digitsArray = [];
    digitsArray.unshift(digit.toString());
    const digitsList = this.makeDigitsList(digitsArray);
    fs.writeFileSync(this.filePath, digitsArray.join(';'));
    return digitsList;
  }
}
