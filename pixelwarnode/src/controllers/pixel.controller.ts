import { Controller, Get, Post } from '@nestjs/common';
import { Pixel } from '../models/pixel.model';
import { UDPService } from '../services/UDPService/udp.service';

@Controller('pixels')
export class PixelController {
  constructor(private udpService: UDPService) {
    udpService.listen('message').subscribe(this.onMessage);
  }

  onMessage(message) {
    console.log('recieved message : ', message);
  }

  @Get()
  getHello(): string {
    return 'coucou';
  }

  @Post()
  postPixel(pixel: Pixel): Pixel {
    return pixel;
  }
}
