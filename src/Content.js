import React from "react";
import styled from "styled-components";

const StyledContent = styled.p`
  color: ${props => props.theme.color.red};

  ${props => props.theme.media.phone`
    color: ${props => props.theme.color.grey};
  `}
`;

const Content = () => (
  <StyledContent>
    Edit src/App.js and save to reload.
  </StyledContent>
);

export default Content;