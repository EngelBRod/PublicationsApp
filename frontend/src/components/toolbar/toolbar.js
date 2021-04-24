import React from 'react';

import {
  FormControl, Grid, InputLabel, Select, MenuItem, TextField, InputAdornment,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import { useDispatch, connect } from 'react-redux';
import { search, ordering } from '../../redux/actions/actionsCreator';

const Form = styled(FormControl)`
  width:100%;
`;
const SearchBar = styled(TextField)`
  
`;
const Sorter = styled(Select)`
  width: 150px !important;
`;

function Toolbar() {
  const dispatch = useDispatch();
  function searching(e) {
    const word = e.target.value;
    dispatch(search(word));
  }
  function searchAndClean(e) {
    e.preventDefault();
    const word = e.target.searchBar.value;
    search(word);
    e.target.searchBar.value = '';
  }
  function settinOrder(e) {
    const order = e.target.value;
    dispatch(ordering(order));
  }
  return (
    <Form onSubmit={searchAndClean}>
      <Grid container justify="center" alignItems="center">
        <FormControl>
          <SearchBar
            name="searchBar"
            label="Search"
            onChange={searching}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel id="sortByDate">Sort By Date</InputLabel>
          <Sorter value="" onChange={settinOrder} labelId="sortByDate">
            <MenuItem value="Newest">Newest</MenuItem>
            <MenuItem value="Oldest">Oldest</MenuItem>
          </Sorter>
        </FormControl>
      </Grid>
    </Form>
  );
}

export default connect()(Toolbar);
