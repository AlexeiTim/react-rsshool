import React from 'react';
import SearchBar from '../../components/SearchBar';
import Cards from '../../components/Cards';

class Main extends React.Component {
  render() {
    return (
      <div role="container" className="container">
        <h1>HOME PAGE!</h1>
        <SearchBar />
        <Cards />
      </div>
    );
  }
}

export default Main;
