import { All, Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  url = 'http://localhost:3000/*';
  constructor(private readonly appService: AppService) {}
}
