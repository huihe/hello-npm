import { hello } from '../src/index';

describe('hello', () => {
  it('should return hello message', () => {
    expect(hello('Hui')).toEqual('Hello Hui');
  });
});
