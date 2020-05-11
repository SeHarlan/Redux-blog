import { createPost, CREATE_POST, deletePost, DELETE_POST, updatePost, UDPATE_POST } from './postActions';


describe('post actions', () => {
  it('creates a post', () => {
    const action = createPost({
      title: 'test title',
      body: 'test body'
    });

    expect(action).toEqual({
      type: CREATE_POST,
      payload: {
        title: 'test title',
        body: 'test body',
      }
    });
  });

  it('deletes a post', () => {
    const action = deletePost(1);
    expect(action).toEqual({
      type: DELETE_POST,
      payload: 1
    });
  });

  it('updates a post by index', () => {
    const action = updatePost({
      index: 1,
      body: 'test body'
    });
    expect(action).toEqual({
      type: UDPATE_POST,
      payload: {
        index: 1,
        body: 'test body'
      }
    });
  });
});
