import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/searchBox/searchBox.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      // name: 'Allan'
      monsters: [],
      search: '',
  };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users => this.setState ({monsters : users }))
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  }
  render() {

    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()))
    return (
      <div className='App'>
      <SearchBox 
      placeholder = 'Search for Monster' 
      handleChange = {this.handleChange}
      />
      <CardList monsters = { filteredMonsters }>
      </CardList>



      </div>
    )
  }
}
export default App;
