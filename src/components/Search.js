import React from "react";
import styled from "styled-components";

const Search = styled.input.attrs({ type: "text" })`
    margin: 1rem;
    background: #fff;
    font-size: 1.3rem;
    border: none;
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    padding: 0 2rem;
    width: calc(100% - 2rem);
    height: 4rem;
`;

export default props =>
  <Search
    placeholder="...start typing"
    type="text"
    value={props.filterText}
    onChange={props.updateSearch}
  />;
