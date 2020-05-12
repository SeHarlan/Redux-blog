export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = ({ postIndex, comment }) => ({
  type: CREATE_COMMENT,
  payload: {
    postIndex,
    comment
  }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = ({ postIndex, commentIndex }) => ({
  type: DELETE_COMMENT,
  payload: {
    postIndex,
    commentIndex
  }
});

export const DELETE_POST_COMMENTS = 'DELETE_POST_COMMENTS';
export const deletePostComments = (postIndex) => ({
  type: DELETE_POST_COMMENTS,
  payload: postIndex
});
