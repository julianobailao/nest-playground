import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RedisIoAdapter } from './redis.io.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new RedisIoAdapter(app));  
  await app.listen(3000);

  // const app2 = await NestFactory.create(AppModule);
  // app2.useWebSocketAdapter(new RedisIoAdapter(app2));  
  // await app2.listen(3001);
}
bootstrap();
