import { Module } from '@nestjs/common';
import { PixelController } from './controllers/pixel.controller';
import {UDPService} from './services/UDPService/udp.service';

@Module({
  imports: [],
  controllers: [
    PixelController
  ],
  providers: [
    UDPService
  ],
})
export class AppModule {}
