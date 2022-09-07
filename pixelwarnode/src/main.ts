import { NestFactory } from '@nestjs/core';
// import { UdpAdapter } from './adapters/udp.adapter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const udpAdapter = new UdpAdapter(app);

  // app.useWebSocketAdapter(udpAdapter);
  await app.listen(3000);
}
bootstrap();
