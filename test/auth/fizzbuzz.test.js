'use strict';
const { init } = require('../../server');

/* Contains the test cases for the /calcFizzBuzz routes */
describe('POST /calcFizzBuzz', () => {
  let server, requestOptions;

  beforeAll(async done => {
    server = await init();
    requestOptions = {
      url: '/calcFizzBuzz',
      method: 'POST',
      payload: {
        count: 0,
      },
    };
    done();
  });

  test('Failed with incorrect/empty input', async done => {
    requestOptions.payload.count = '';
    const data = await server.inject(requestOptions);
    expect(data.result.statusCode).toBe(400);
    done();
  });

  test('test with input 0', async done => {
    requestOptions.payload.count = 0;
    const data = await server.inject(requestOptions);
    expect(data.result.statusCode).toBe(200);
    expect(data.result.message).toEqual('Fizzbuzz calculated');
    expect(data.result.data).toEqual([]);

    done();
  });

  test('test with input 15', async done => {
    requestOptions.payload.count = 15;

    const data = await server.inject(requestOptions);
    expect(data.result.statusCode).toBe(200);
    expect(data.result.message).toEqual('Fizzbuzz calculated');
    expect(data.result.data).toEqual([
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
    ]);

    done();
  });
});
