import { Injectable } from '@nestjs/common';
import {Pixel} from "../models/pixel.model"


@Injectable()
export class CoreService {
  //receive u8*5 2x, 2y, 1 color depuis un chunk
  receiveMap(data:any): Pixel[] {
    const pixels: Pixel[] = [];
    for (let i= 0; i< 256; i++) {
      pixels.push({
        x: i,
        y: i,
        c: i%8
      })
    }
    return pixels;
  }
}