import { Test, TestingModule } from '@nestjs/testing';
import { CoreService } from './core.service';

describe('coreService', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      providers: [CoreService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', async () => {
      const coreService = await app.get<CoreService>(CoreService);
      expect(coreService.receiveMap(null)).toBeInstanceOf(Array);
    });
  });
});
