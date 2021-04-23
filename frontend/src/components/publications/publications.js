import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import Publication from './publication/publication';

const PublicationsContainer = styled(Grid)`
  padding:30px;
  height:700px;
`;

function Publications() {
  // eslint-disable-next-line max-len
  const [publicationsView] = useSelector((state) => [state.publications.publicationsView]);

  const publicationList = publicationsView.map((publication) => (

    <Publication
      key={publication.id}
      title={publication.title}
      body={publication.body}
      date={publication.date}
      time={publication.time}
    />
  ));

  return (
    <PublicationsContainer container direction="column">
      { publicationList }
    </PublicationsContainer>
  );
}

export default connect()(Publications);
