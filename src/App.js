import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import logo from "./logo.svg";
import "./App.css";

import NamesList from "./components/NamesList";
import Name from "./components/Name";
import Search from "./components/Search";
import ClearSearch from "./components/ClearSearch";

const Header = styled.header`
  background: #3498db;
  margin-bottom: 2rem;
`;
const Headline = styled.h4`
  padding: 1rem 0;
  font-weight: 400;
  font-size: 1.3rem;
  margin: 0;
  color: #b3b3b3;
`;

const Separator = styled.hr`
  border-bottom: 0;
  border-top: solid 1px #e6e6e6;
  margin: 1.75rem 0;
`;

const Main = styled.main`padding: 0 2rem;`;

injectGlobal`
* {
  box-sizing: border-box;
}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      favourites: []
    };
    this.updateFavourites = this.updateFavourites.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }
  updateFavourites(id) {
    this.setState({
      favourites: this.state.favourites.includes(id)
        ? // remove index that was clicked if already favourite
          this.state.favourites.filter(item => item !== id)
        : // add the index if not favourite yet
          [...this.state.favourites].concat(id)
    });
  }

  updateSearch(e) {
    const text = e.target.value;
    this.setState({ filterText: text });
  }

  clearSearch() {
    this.setState({ filterText: "" });
  }
  render() {
    const favNames = this.state.favourites.map(index => this.props.data[index]);
    const availableNames = this.props.data.filter(
      (name, i) =>
        !this.state.favourites.includes(i) &&
        name.name.toLowerCase().includes(this.state.filterText.toLowerCase())
    );
    return (
      <div className="App">
        <Header>
          <Search
            filterText={this.state.filterText}
            updateSearch={this.updateSearch}
          />
        </Header>
        <Main>
          {this.state.filterText &&
            <ClearSearch clearSearch={this.clearSearch}>
              Clear search
            </ClearSearch>}
          <Headline>
            {this.state.favourites > 0
              ? "My favourite names"
              : "Pick your favourite names.."}
          </Headline>

          <NamesList
            names={favNames}
            updateFavourites={this.updateFavourites}
            favourited={true}
          />

          <Separator />

          <NamesList
            names={availableNames}
            updateFavourites={this.updateFavourites}
            favourited={false}
          />
        </Main>
      </div>
    );
  }
}

export default App;
