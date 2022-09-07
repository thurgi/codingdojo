import { Controller, Get, Post } from '@nestjs/common';
import { UDPService } from 'src/services/UDPService/udp.service';
import {Pixel} from '../models/pixel.model'


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
