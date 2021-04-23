import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';

import { useSelector, connect } from 'react-redux';

const AuthorInfo = styled(Grid)`
  padding:30px;
  color:#010C37;
`;
const FullName = styled(Typography)`
  font-size:30px !important;
`;
const Email = styled(Typography)`
  font-size:15px !important;
`;
const Birthday = styled(Typography)`
  font-size:15px !important;
`;

function SelectedAuthor() {
  const [selectedAuthor] = useSelector((state) => [state.publications.selectedAuthor]);
  return (
    <AuthorInfo container direction="column">
      <FullName variant="h2">{`${selectedAuthor.name} ${selectedAuthor.lastname}`}</FullName>
      <Email variant="h3">{`< ${selectedAuthor.email} >`}</Email>
      <Birthday variant="h3">{`Birth Date: ${selectedAuthor.birthday}`}</Birthday>
    </AuthorInfo>
  );
}

export default connect()(SelectedAuthor);
