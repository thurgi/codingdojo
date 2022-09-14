import { Test, TestingModule } from '@nestjs/testing';
import { PixelController } from './pixel.controller';
import { UDPService } from '../services/UDPService/udp.service';

describe('PixelController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [PixelController],
      providers: [UDPService],
    }).compile();
  });

  describe('getPixel', () => {
    it('should return "coucou"', async () => {
      const pixelController = app.get<PixelController>(PixelController);
      expect(pixelController.getHello()).toBe('coucou');
    });
  });
});
