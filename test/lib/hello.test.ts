import hello from '@/lib/hello';

describe('lib.hello', () => {
  it('should say "hello world!"', () => {
    expect(hello()).toBe('Hello world!');
  });

  it('should say "hello you!"', () => {
    expect(hello('you')).toBe('Hello you!');
  });
});
