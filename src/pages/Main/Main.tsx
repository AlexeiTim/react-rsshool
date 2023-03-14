import React from 'react';
import SearchBar from '../../components/SearchBar';
import Cards from '../../components/Cards';

class Main extends React.Component {
  state = {
    searchValue: '',
  };
  changeSearchValue(value: string) {
    this.setState({ ...this.state, searchValue: value });
  }
  render() {
    return (
      <div role="container" className="container">
        <SearchBar
          value={this.state.searchValue}
          onChangeValue={(e) => this.changeSearchValue(e.currentTarget.value)}
        />
        <Cards />
      </div>
    );
  }
}

export default Main;
