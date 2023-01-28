import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

import { CreateMessageDTO } from './DTO/message.createDTO';

@Injectable()
export class MessageService {
  create(message: CreateMessageDTO): { messages: CreateMessageDTO[] } {
    try {
      const filePath = join(__dirname, '..', '..', 'public', 'messages.json');
      const data = fs.readFileSync(filePath, 'utf8');
      let messageList = JSON.parse(data);
      if (message.author || message.text) {
        if (messageList.length) messageList.unshift(message);
        else messageList = [{ ...message }];
        fs.writeFileSync(filePath, JSON.stringify(messageList));
      }
      return { messages: messageList };
    } catch (e) {
      throw e;
    }
  }
}
