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
  const [publicationsView, authors] = useSelector((state) => [state.publications.publicationsView, state.authors.authors]);

  const publicationList = publicationsView.map((publication) => (
    <Publication
      key={publication.id}
      title={publication.title}
      body={publication.body}
      date={publication.date}
      authorName={authors.filter((author) => publication.author === author.id)}
      authorEmail={publication.authorEmail}
    />
  ));
  return (
    <PublicationsContainer container direction="column">
      { publicationList }
    </PublicationsContainer>
  );
}

export default connect()(Publications);
