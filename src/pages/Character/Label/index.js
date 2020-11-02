import React from 'react';

import { Container, Title, Description } from './style';

const Label = ({ title, description }) => (
  <Container>
    <Title>
      { title.toUpperCase() }
    </Title>
    <Description>
      { description }
    </Description>
  </Container>
);

export default Label;