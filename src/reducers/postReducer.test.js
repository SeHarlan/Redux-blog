import reducer from './postReducer';
import { createPost, deletePost, updatePost } from '../actions/postActions';

describe('post reducer', () => {
  it('handles CREATE_POST action', () => {
    const state = [];
    const action = createPost({
      title: 'test title',
      body: 'test body'
    });
    const newState = reducer(state, action);
    expect(newState).toEqual([
      {
        title: 'test title',
        body: 'test body',
      }
    ]);
  });
  it('handles DELETE_POST action', () => {
    const state = [{
      title: 'test title',
      body: 'test body',
    }];
    const action = deletePost(0);
    const newState = reducer(state, action);
    expect(newState).toEqual([]);
  });
  it('handles UPDATE_POST action', () => {
    const state = [{
      title: 'test title',
      body: 'test body',
    }];
    const action = updatePost({
      index: 0,
      body: 'updated body'
    });
    const newState = reducer(state, action);
    expect(newState).toEqual([{
      title: 'test title',
      body: 'updated body'
    }]);
  });
});
