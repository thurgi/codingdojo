import { Test, TestingModule } from '@nestjs/testing';
import { PixelController } from './pixel.controller';

describe('PixelController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [PixelController],
      providers: [],
    }).compile();
  });

  describe('getPixel', () => {
    it('should return "coucou"', () => {
      const pixelController = app.get<PixelController>(PixelController);
      expect(pixelController.getHello()).toBe('coucou');
    });
  });
});
