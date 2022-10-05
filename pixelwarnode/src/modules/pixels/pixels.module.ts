import { Module } from '@nestjs/common';
import { PixelsController } from './pixels.controller';
import { PixelsService } from './pixels.service';
import { UDPService } from '../../services/UDPService/udp.service';

@Module({
  controllers: [PixelsController],
  providers: [PixelsService, UDPService],
})
export class PixelsModule {}
