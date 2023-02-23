import { SuperTest, Test } from 'supertest';

declare global {
  var testRequest: SuperTest<Test>;
}
