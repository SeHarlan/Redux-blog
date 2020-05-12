import { createComment, deleteComment, deletePostComments } from '../actions/commentActions';
import reducer from './commentReducer';

describe('comment reducer', () => {
  it('handles CREATE_COMMENT action', () => {
    const state = {};
    const action = createComment({
      postIndex: 1,
      comment: 'test comment'
    });
    const newState = reducer(state, action);
    expect(newState).toEqual({ 1: ['test comment'] });
  });
  it('handles DELETE_COMMENT action', () => {
    const state = {
      1: ['test comment']
    };
    const action = deleteComment({ postIndex: 1, commentIndex: 0 });
    const newState = reducer(state, action);
    expect(newState).toEqual({ 1: [] });
  });
  it('handles DELETE_POST_COMMENTS', () => {
    const state = {
      1: ['test comment']
    };
    const action = deletePostComments(1);
    const newState = reducer(state, action);
    expect(newState).toEqual({});
  });
});
