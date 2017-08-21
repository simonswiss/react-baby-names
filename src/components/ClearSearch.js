import React from "react";
import styled from "styled-components";

const Clear = styled.button`
  background: tomato;
  border: none;
  color: white;
  padding: 0.6rem 1rem;
  font-size: 0.8rem;
  margin: 1rem 0;
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default props => <Clear onClick={props.clearSearch}>Clear search</Clear>;
