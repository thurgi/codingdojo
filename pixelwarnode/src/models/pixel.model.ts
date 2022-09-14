export interface Pixel {
  x: number;
  y: number;
  c: number;
}

export class PixelImpl implements Pixel {
  x = 0;
  y = 0;
  c = 0;
}
