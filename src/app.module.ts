import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat.gateway';
import { CorsMiddleware } from './cors.middleware';
import { ChatSubscribe } from './chat.subscribe';

@Module({
  imports: [ChatSubscribe],
  controllers: [AppController],
  providers: [ChatGateway, AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorsMiddleware)
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      });
  }
}
