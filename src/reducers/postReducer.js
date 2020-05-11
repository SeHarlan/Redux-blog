import { CREATE_POST, DELETE_POST, UDPATE_POST } from '../actions/postActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case CREATE_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter((_, i) => i !== action.payload);
    case UDPATE_POST:
      return state.map((post, i) => {
        if(i === action.payload.index) return { ...post, body: action.payload.body };
        return post;
      });
    default:
      return state;
  }
}
