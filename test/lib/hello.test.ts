import hello from '@/lib/hello';

describe('Hello!', () => {
  it('should say hello', () => {
    expect(hello()).toBe('Hello world');
  });
});
