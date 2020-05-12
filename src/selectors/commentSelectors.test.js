import { getCommentByPostIndex } from './commentSelectors';

describe('comment selectors', () => {
  it('gets comments by post index number', () => {
    const state = { 1: ['test comment'] };
    const comments = getCommentByPostIndex(state, 1);
    expect(comments).toEqual(['test comment']);
  });
});
