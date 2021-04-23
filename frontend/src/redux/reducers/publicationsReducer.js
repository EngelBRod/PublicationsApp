import * as ActionTypes from '../actions/actionTypes';

const setPublicationView = (publications, order, actualPage, searchBar, selectedAuthor) => {
  // searching publications
  const publicationFiltered = publications.filter((publication) => {
    if (selectedAuthor.id === 0 || !selectedAuthor) {
      if (publication.title.toLowerCase().includes(searchBar.toLowerCase())) {
        return true;
      }
      return false;
    }
    if (
      publication.title.toLowerCase().includes(
        searchBar.toLowerCase(),
      ) && publication.author === selectedAuthor.id
    ) {
      return true;
    }
    return false;
  });

  // ordering publications
  const publicationOrdered = publicationFiltered.sort((a, b) => {
    const date1 = new Date(b.date).getTime() / 1000;
    const date2 = new Date(a.date).getTime() / 1000;
    if (order === 'Newest') {
      return (
        (date1 > date2) ? 1 : -1
      );
    }
    return (
      (date1 < date2) ? 1 : -1
    );
  });

  const pages = [];
  const size = Math.ceil(publicationOrdered.length / 3);
  for (let i = 0; i < size; i += 1) {
    pages.push(i + 1);
  }

  // paginating publications
  const publicationsView = publicationOrdered.slice((actualPage - 1) * 3, actualPage * 3);

  return { publicationsView, pages };
};

const Publications = (state = {
  publications: [],
  publicationsView: [],
  order: 'Newest',
  searchBar: '',
  actualPage: 1,
  pages: [],
  selectedAuthor: {
    id: 0, name: 'All', lastname: 'Authors', birthday: '--', email: '--',
  },
}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PUBLICATIONS: {
      const { publicationsView, pages } = setPublicationView(
        action.payload, state.order, state.actualPage, state.searchBar, state.selectedAuthor.id,
      );
      return {
        ...state, publications: action.payload, publicationsView, pages,
      };
    }

    case ActionTypes.ORDERING_PUBLICATIONS: {
      const { publicationsView, pages } = setPublicationView(
        state.publications, action.payload, state.actualPage,
        state.searchBar, state.selectedAuthor,
      );
      return {
        ...state, publicationsView, order: action.payload, pages,
      };
    }

    case ActionTypes.SEARCHING_PUBLICATIONS: {
      const { publicationsView, pages } = setPublicationView(
        state.publications, state.order, state.actualPage, action.payload, state.selectedAuthor,
      );
      return {
        ...state, searchBar: action.payload, publicationsView, pages,
      };
    }

    case ActionTypes.SELECT_PAGE: {
      const { publicationsView, pages } = setPublicationView(
        state.publications, state.order, action.payload, state.searchBar, state.selectedAuthor,
      );
      return {
        ...state, publicationsView, actualPage: action.payload, pages,
      };
    }
    case ActionTypes.SELECT_AUTHOR: {
      const { publicationsView, pages } = setPublicationView(
        state.publications, state.order, 1, state.searchBar, action.payload,
      );
      return {
        ...state, selectedAuthor: action.payload, actualPage: 1, publicationsView, pages,
      };
    }

    default:
      return state;
  }
};

export default Publications;
