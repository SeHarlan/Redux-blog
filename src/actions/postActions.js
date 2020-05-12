export const CREATE_POST = 'CREATE_POST';
export const createPost = ({ title, body }) => ({ 
  type: CREATE_POST,
  payload: {
    title,
    body,
  }
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = (index) => ({
  type: DELETE_POST,
  payload: index
}); 

export const UDPATE_POST = 'UPDATE_POST';
export const updatePost = ({ index, body }) => ({
  type: UDPATE_POST,
  payload: {
    index,
    body
  }
});
