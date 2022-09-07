import { Controller, Get, Post } from '@nestjs/common';
import {Pixel} from '../models/pixel.model'


@Controller('pixels')
export class PixelController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'coucou';
  }

  @Post()
  postPixel(pixel: Pixel): Pixel {
    return pixel;
  }

  
}
