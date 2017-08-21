import React, { Component } from "react";
import styled, { css } from "styled-components";

const Name = styled.li`
  position: relative;
  list-style: none;
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin: 2px;
  border-radius: 3px;

  ${props =>
    props.favourited &&
    css`
    &:hover:before {
      content: '\00D7';
      position: absolute;
      top: -0.5rem;
      right: -0.3rem;
      width: 1rem;
      height: 1rem;
      z-index: 2;
      text-align: center;
      line-height: 1;
      font-size: 0.9rem;
      vertical-align: middle;
      border-radius: 50%;
      background: #ff6347;
      border: solid 2px #fff;
      color: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    }
  `};

  ${props =>
    props.sex === "girl"
      ? css`
    background: #ffc6e5;
    color: #940050;
    &:hover {
      background: #ffadd9;
    }
  `
      : css`
    background: #a0cfee;
    color: #16527a;
    :hover {
      background: #8bc4ea;
    }
  `} &:hover {
    cursor: pointer;
  }
`;

export default props =>
  <Name
    onClick={id => props.updateFavourites(props.id)}
    sex={props.sex}
    favourited={props.favourited}
  >
    {props.name}
  </Name>;
