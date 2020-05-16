import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { SearchBox } from "./components/search-box/search-box.component"
import {CardList} from './components/card-list/card-list.component';

class App extends Component
{
  constructor()
  {
    super();
    this.state =
    {
      monsters: [],
      searchField: ""
    };
  }

  handleChange = (e) =>
  {
    this.setState({searchField: e.target.value})
  }

  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render()
  {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )    
    return (
      <div className="App">
        <h1>Bigelow Rules</h1>
        <SearchBox
          placeholder="Search monsters"
          eventHandler={ this.handleChange }
        />
        <CardList monsters={ filterMonsters }/>
      </div>
    );
  }
}

export default App;
