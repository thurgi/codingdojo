import { Test, TestingModule } from '@nestjs/testing';
import { PixelsController } from './pixels.controller';
import { UDPService } from '../../services/UDPService/udp.service';

describe('PixelsController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [PixelsController],
      providers: [UDPService],
    }).compile();
  });

  describe('getPixel', () => {
    it('should return "coucou"', async () => {
      const pixelsController = app.get<PixelsController>(PixelsController);
      expect(pixelsController.getHello()).toBe('coucou');
    });
  });
});
