import React, { Component } from "react";
import Name from "./Name";
import styled from "styled-components";

const List = styled.ul`padding: 0;`;

export default class extends Component {
  render() {
    return (
      <List>
        {this.props.names.map(name =>
          <Name
            key={name.id}
            id={name.id}
            sex={name.sex}
            name={name.name}
            updateFavourites={this.props.updateFavourites}
            favourited={this.props.favourited}
          />
        )}
      </List>
    );
  }
}
