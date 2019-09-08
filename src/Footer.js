import React from 'react';
import styled from 'styled-components/macro';

export default function Footer() {
  return (
    <Container>
      by<a href='https://tsmarques.com'> TSMarques</a>
    </Container>
  );
}

const Container = styled.div`
  font-size: 1.25rem;
  text-align: center;
  position: absolute;
  bottom: 1rem;
  font-family: sans-serif;
  color: #fff;

  @media only screen and (min-width: 1024px) {
    bottom: 2rem;
  }
`;
