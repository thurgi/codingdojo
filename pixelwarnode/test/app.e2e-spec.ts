import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

describe('PixelController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('PixelController GET test', () =>{
    return request(app.getHttpServer())
      .get('/pixels')
      .expect(200)
      .expect('coucou');
  });

  it('PixelController POST test', () =>{
    const pixel = {
      x: 122,
      y: 7,
      c: 0
    };
    return request(app.getHttpServer())
      .post('/pixels')
      .send(pixel)
      .expect(200)
      .expect(pixel);
  });
});
