import * as ActionTypes from '../actions/actionTypes';

const Authors = (state = {
  authors: [],
  selectedAuthor: {
    id: 0, name: '', lastname: '', birthday: '', email: '',
  },
}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_AUTHORS:
      return { ...state, authors: action.payload };
    default:
      return state;
  }
};

export default Authors;
