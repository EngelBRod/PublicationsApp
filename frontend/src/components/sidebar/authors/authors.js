import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton, Typography, Grid, Box,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';
import { saveSelectedAuthor } from '../../../redux/actions/actionsCreator';

const AuthorInfo = styled(Grid)`
  padding: 5px 20px;
`;
const AuthorsName = styled(Typography)`
  font-size:25px !important;
  color: #f5f5f5 !important;
`;
const AuthorSelector = styled(IconButton)`
  color:#10142e !important;
  background-color: #fff !important;
  width: 10px !important;
  height: 10px !important;
  &:hover {
    background-color: #10142e !important;
    color:#fff !important;
  }
`;

function Authors({
  name, lastName, id, birthday, email,
}) {
  const dispatch = useDispatch();

  function selectAuthor() {
    dispatch(saveSelectedAuthor(id, name, lastName, email, birthday));
  }
  return (
    <AuthorInfo container direction="row" alignItems="center" justify="space-between">
      <AuthorsName variant="h3">
        <Box>{ `${name} ${lastName}` }</Box>
      </AuthorsName>
      <AuthorSelector onClick={() => selectAuthor()}>
        <NavigateNextIcon />
      </AuthorSelector>
    </AuthorInfo>
  );
}

export default connect()(Authors);

Authors.defaultProps = {
  id: 0,
  name: '',
  lastName: '',
  birthday: '',
  email: '',
};
Authors.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  lastName: PropTypes.string,
  birthday: PropTypes.string,
  email: PropTypes.string,
};
