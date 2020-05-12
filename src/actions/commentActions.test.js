import { createComment, CREATE_COMMENT, deleteComment, DELETE_COMMENT } from './commentActions';

describe('comment Actions', () => {
  it('creates a comment', () => {
    const action = createComment({
      postIndex: 1,
      comment: 'test comment'
    });
    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: {
        postIndex: 1,
        comment: 'test comment'
      }
    });
  });
  it('deletes a comment', () => {
    const action = deleteComment({
      postIndex: 1,
      commentIndex: 1
    });
    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: {
        postIndex: 1,
        commentIndex: 1
      }
    });
  });
});
