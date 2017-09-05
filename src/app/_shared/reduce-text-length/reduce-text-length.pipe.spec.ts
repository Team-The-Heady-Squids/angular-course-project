import { ReduceTextLengthPipe } from './reduce-text-length.pipe';

describe('ReduceTextLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new ReduceTextLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
