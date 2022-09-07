export interface Pixel {
  x: number;
  y: number;
  c: number;
}


export class PixelImpl implements Pixel {
  x: number = 0;
  y: number = 0;
  c: number = 0;
}

