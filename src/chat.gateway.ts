import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Injectable, Inject } from '@nestjs/common';
import nrp from './nrp';
import emitter from './emitter';

@Injectable()
@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: any;

  afterInit() {
    emitter.server = this.server;    
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {    
    emitter.emitToRedis('message', payload);
    return 'Hello world!';
  }
}
