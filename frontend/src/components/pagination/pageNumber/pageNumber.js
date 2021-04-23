import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { saveCurrentPage } from '../../../redux/actions/actionsCreator';

const PaginatorButton = styled(Button)`
  font-size: 20px !important;
  color: #10142e !important;
`;

function PageNumber({ number }) {
  const dispatch = useDispatch();
  function setPage() {
    // eslint-disable-next-line no-console
    console.log('working');
    dispatch(saveCurrentPage(number));
  }
  return (
    <PaginatorButton type="button" onClick={setPage}>{number}</PaginatorButton>
  );
}

export default connect()(PageNumber);

PageNumber.defaultProps = {
  number: 1,
};

PageNumber.propTypes = {
  number: PropTypes.number,
};
