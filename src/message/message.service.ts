import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

import { CreateMessageDTO } from './DTO/message.createDTO';

@Injectable()
export class MessageService {
  filePath = join('public', 'messages.json');
  create(message: CreateMessageDTO): { messages: CreateMessageDTO[] } {
    try {
      let messageList: CreateMessageDTO[];
      if (fs.existsSync(this.filePath)) {
        const data = fs.readFileSync(this.filePath, 'utf8');
        messageList = JSON.parse(data);
      } else messageList = [];
      if (message.author || message.text) {
        messageList.unshift(message);
        fs.writeFileSync(this.filePath, JSON.stringify(messageList));
      }
      return { messages: messageList };
    } catch (e) {
      throw e;
    }
  }
}
