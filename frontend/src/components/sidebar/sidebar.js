import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import styled from 'styled-components';
import { connect, useSelector } from 'react-redux';
import Authors from './authors/authors';

const PageName = styled(Typography)`
  font-size: 30px !important;
  padding: 30px 20px;
  color: #fff;
  font-weight:bolder !important;
`;
const Heading = styled(Typography)`
  font-size: 20px !important;
  font-weight: bold !important;
  padding: 30px 20px;
  color: #fff;
`;
function Sidebar() {
  const [authors] = useSelector((state) => [state.authors.authors]);
  const authorList = authors.map((author) => (

    <Authors
      key={author.id}
      id={author.id}
      name={author.name}
      lastName={author.lastName}
      email={author.email}
      birthday={author.birthday}
    />

  ));
  return (
    <Grid>
      <PageName variant="h2" align="left">
        PublishApp
        <MessageIcon />
      </PageName>
      <Heading variant="h2" align="left">Authors list</Heading>
      <Authors
        key={0}
        id={0}
        name="All"
        lastName="Authors"
        email="--"
        birthday="--"
      />
      { authorList }
    </Grid>
  );
}

export default connect()(Sidebar);
