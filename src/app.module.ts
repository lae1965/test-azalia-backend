import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';
import { DigitsModule } from './digits/digits.module';

@Module({
  imports: [MessageModule, DigitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
