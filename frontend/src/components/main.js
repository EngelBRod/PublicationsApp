import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';
import { requestPublications, requestAuthors } from '../redux/actions/actionsCreator';
import Publications from './publications/publications';
import Sidebar from './sidebar/sidebar';
import Toolbar from './toolbar/toolbar';
import SelectedAuthor from './selectedAuthor/selectedAuthor';
import Pagination from './pagination/pagination';

const MainContainer = styled(Grid)`
  min-height: 100vh;
`;
const SideBarContainer = styled(Grid)`
  background-color:#10142e;
  min-height: 100vh;
`;
const MainSection = styled(Grid)`
  background-color:#fff;
    min-height: 100vh;
`;

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAuthors());
    dispatch(requestPublications());
  }, []);
  return (
    <MainContainer container>
      <SideBarContainer item xs={12} md={2}>
        <Sidebar />
      </SideBarContainer>
      <MainSection item xs={12} md={10}>
        <Toolbar />
        <SelectedAuthor />
        <Publications />
        <Pagination />
      </MainSection>
    </MainContainer>
  );
}

export default connect()(Main);
