import React from 'react';

// Components
import Speed from './Speed';

// Styled
import styled from 'styled-components';
import { boxShadow, colors } from '../../styles/sharedValues';

const Number = styled.p`
  font-weight: bold;
  font-size: 4rem;
  color: #000000;
  /* color: ${colors.text}; */
`;

const String = styled.span`
  margin-top: auto;
  text-align: end;
  font-size: 1.8rem;
  color: ${colors.text};
`;

const Indicator = styled.div`
  height: 3px;
  width: 100%;
  border-radius: 2px;
`;

const Container = styled.div`
  background-color: white;
  padding: 1rem;
  margin: 1rem;
  width: 8rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CrackTime = ({ crackTime, speed }) => (
  <Container>
    {crackTime.number ? <Number>{crackTime.number}</Number> : null}
    <String>{crackTime.string}</String>
    {/* <Speed>{speed}</Speed> */}
  </Container>
);

export default CrackTime;
