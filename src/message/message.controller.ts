import { Body, Controller, Post, Render } from '@nestjs/common';

import { MessageService } from './message.service';
import { CreateMessageDTO } from './DTO/message.createDTO';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}
  @Post()
  @Render('messages')
  create(@Body() body: CreateMessageDTO) {
    return this.messageService.create(body);
  }
}
