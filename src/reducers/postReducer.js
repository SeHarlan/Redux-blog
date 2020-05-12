import { CREATE_POST, DELETE_POST, UDPATE_POST } from '../actions/postActions';

export default function reducer(state = [], { type, payload }) {
  switch(type) {
    case CREATE_POST:
      return [...state, payload];
    case DELETE_POST:
      return state.filter((_, i) => i !== payload);
    case UDPATE_POST:
      return state.map((post, i) => {
        if(i === payload.index) return { ...post, body: payload.body };
        return post;
      });
    default:
      return state;
  }
}
