import { getPosts, getPostByIndex } from './postSelectors';

describe('post selectors', () => {
  it('gets all posts', () => {
    const state = [
      {
        title: 'test title',
        body: 'test body',
      }
    ];
    const posts = getPosts(state);
    expect(posts).toEqual([
      {
        title: 'test title',
        body: 'test body',
      }
    ]);
  });
  it('gets a post by index', () => {
    const state = [
      {
        title: 'test title',
        body: 'test body',
      },
      {
        title: 'test title2',
        body: 'test body2',
      }
    ];
    const post = getPostByIndex(state, 1);
    expect(post).toEqual(
      {
        title: 'test title2',
        body: 'test body2',
      }
    );
  });
});
