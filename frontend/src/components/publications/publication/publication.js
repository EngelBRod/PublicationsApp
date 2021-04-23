import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Box } from '@material-ui/core';
import styled from 'styled-components';

const Title = styled(Typography)`
  color:#fff;
  font-size: 30px !important;
  padding-top:15px !important;
`;
const PublicationInfo = styled(Grid)`
  background-color: #f5f5f5;
  padding: 20px;
  margin-top: 15px !important;
  border-radius: 15px 15px;
`;
const Selector = styled(Box)`
  padding: 5px;
  font-weight: bold !important;
  color: #010C37  !important;
`;
const PublicationFooter = styled(Grid)`

`;

function Publication({
  title, body, date, time,
}) {
  return (
    <PublicationInfo item>
      <Title variant="h2" align="center">
        <Selector component="span">{ title }</Selector>
      </Title>
      <Typography paragraph align="left">{`" ${body} "`}</Typography>
      <PublicationFooter container direction="row" justify="space-between">
        <Grid item>
          <Selector component="span">{ time }</Selector>
        </Grid>
        <Grid item>
          <Selector component="span">{ date }</Selector>
        </Grid>
      </PublicationFooter>
    </PublicationInfo>
  );
}

export default Publication;

Publication.defaultProps = {
  title: '',
  body: '',
  date: '',
  time: '',
};
Publication.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,

};
