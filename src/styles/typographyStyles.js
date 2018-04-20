import styled from 'styled-components';
import { thickUnderline } from './styleUtils';

const TypoHeader = styled.h1`
  display: inline;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  text-transform: uppercase;

  ${thickUnderline(props => props.color)}
`;

export { TypoHeader };