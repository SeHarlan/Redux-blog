import { CREATE_COMMENT, DELETE_COMMENT, DELETE_POST_COMMENTS } from '../actions/commentActions';

export default function reducer(state = {}, { type, payload }) {
  switch(type) {
    case CREATE_COMMENT:
      return { 
        ...state, 
        [payload.postIndex]: (state[payload.postIndex] 
          ? [...state[payload.postIndex], payload.comment] 
          : [payload.comment])
      };
    case DELETE_COMMENT:
      return { 
        ...state, 
        [payload.postIndex]: state[payload.postIndex]
          .filter((_, i) => i !== payload.commentIndex) };
    case DELETE_POST_COMMENTS:
      return Object.entries(state)
        .filter(([entrykey]) => entrykey != payload)
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    default:
      return state;
  }
}
