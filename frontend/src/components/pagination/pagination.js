import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import { connect, useSelector } from 'react-redux';
import PageNumber from './pageNumber/pageNumber';

const Paginator = styled(Grid)`

`;
function Pagination() {
  const [pages] = useSelector((state) => [state.publications.pages]);

  const tr = pages.map((element) => (
    <PageNumber
      key={element}
      number={element}
    />
  ));
  return (
    <Paginator container justify="center">{tr}</Paginator>
  );
}

export default connect()(Pagination);
