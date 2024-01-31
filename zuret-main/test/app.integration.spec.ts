// // test/app.integration.spec.ts

// import * as chai from 'chai';
// import * as supertest from 'supertest';
// import { expect } from 'chai';
// import { INestApplication } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { AppModule } from '../src/app.module';

// describe('AppController (Integration)', () => {
//   let app: INestApplication;
//   let request: supertest.SuperTest<supertest.Test>;

//   before(async () => {
//     const moduleFixture: TestingModule = await Test.createTestingModule({
//       imports: [AppModule],
//     }).compile();

//     app = moduleFixture.createNestApplication();
//     await app.init();

//     request = supertest(app.getHttpServer());
//   });

//   after(async () => {
//     await app.close();
//   });

//   it('GET /your-endpoint should return "Hello World!"', async () => {
//     const response = await request.get('/your-endpoint');

//     expect(response.status).to.equal(200);
//     expect(response.text).to.equal('Hello World!');
//   });
// });