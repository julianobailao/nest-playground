import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { ChatGateway } from './chat.gateway';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly gateway: ChatGateway,
  ) {}

  @Get()
  root(): string {
    return this.appService.root();
  }
}
