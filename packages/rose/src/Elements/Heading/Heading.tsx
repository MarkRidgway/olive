import React from 'react';
import { Heading as StyledHeading } from './Heading.style';

const Heading: React.FC = ({ children }) => (
  <StyledHeading>{ children }</StyledHeading>
);

export default Heading;
