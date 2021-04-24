import * as ActionTypes from './actionTypes';

export const addPublications = (publications) => (
  {
    type: ActionTypes.ADD_PUBLICATIONS,
    payload: publications,
  });

export const searchBar = (word) => (
  {
    type: ActionTypes.SEARCHING_PUBLICATIONS,
    payload: word,
  });

export const setOrder = (order) => (
  {
    type: ActionTypes.ORDERING_PUBLICATIONS,
    payload: order,
  }
);

export const setCurrentPage = (page) => (
  {
    type: ActionTypes.SELECT_PAGE,
    payload: page,
  }
);

export const selectAuthor = (id, name, lastname, email, birthday) => (
  {
    type: ActionTypes.SELECT_AUTHOR,
    payload: {
      id, name, lastname, email, birthday,
    },
  }
);

export const addAuthors = (authors) => ({
  type: ActionTypes.ADD_AUTHORS,
  payload: authors,
});

export const requestPublications = () => async (dispatch) => {
  const results = await fetch(process.env.REACT_APP_PUBLICATIONS);
  const response = await results.json();
  dispatch(addPublications(response));
};

export const requestAuthors = () => async (dispatch) => {
  const results = await fetch(process.env.REACT_APP_AUTHORS);
  const response = await results.json();
  dispatch(addAuthors(response));
};

export const search = (word) => (dispatch) => {
  dispatch(searchBar(word));
};

export const ordering = (order) => (dispatch) => {
  dispatch(setOrder(order));
};

export const saveSelectedAuthor = (id, name, lastname, email, birthday) => (dispatch) => {
  dispatch(selectAuthor(id, name, lastname, email, birthday));
};

export const saveCurrentPage = (page) => (dispatch) => {
  dispatch(setCurrentPage(page));
};
