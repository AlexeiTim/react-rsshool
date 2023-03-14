import React from 'react';
import SearchBar from '../../components/SearchBar';
import Cards from '../../components/Cards';

class Main extends React.Component {
  changeSearchValue(value: string) {
    console.log(value);
    this.setState({ ...this.state, searchValue: value });
  }
  render() {
    return (
      <div role="container" className="container">
        <SearchBar />
        <Cards />
      </div>
    );
  }
}

export default Main;
