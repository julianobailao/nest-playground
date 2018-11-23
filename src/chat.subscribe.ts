import { SubscribeRedisMessage } from './subscribe.redis.message.decorator';
import emitter from './emitter';

export class ChatSubscribe {  
  @SubscribeRedisMessage('message')
  curintia() {
    emitter.emit('teste', 'teste');
    console.log('shazam carai');
  }  
}
