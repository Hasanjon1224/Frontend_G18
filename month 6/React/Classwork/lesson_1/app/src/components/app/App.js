import React, { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/MovieList";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        {
          name: "empire of osman", viewers: 12, favourite: false, id: 1, like: false
        },

        {
          name: 'ertugrul', viewers: 123, favourite: false, id: 2, like: false
        },

        {
          name: "Omar", viewers: 234, favourite: false, id: 3, like: true
        },

      ],

      term: '',
      filter: "all",
    }
  }
  

  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id)
    }))
  }


  addForm = (item) => {
    const newitem = { name: item.name, viewers: item.views, id: uuidv4(), favourite: false, like: false };
    this.setState(({ data }) => ({
      data: [...data, newitem]
    }))
  }

  onToggleProp = (id, prop) => {
    console.log(prop);

    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }

        return item;
      })
    }))
  }

  onSearchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }

    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1);

  }


  updateTermHandler = (term) => {
    this.setState({ term })
  }

  filterHandler = (arr, filter) => {
    switch (filter) {
      case 'popular':
        return arr.filter(c => c.like)
      case 'mostPopular': return arr.filter(c => c.viewers > 700)
      default: return arr
    }
  }

  updateFilterHandler = (filter) => {
    this.setState({ filter })
  }

  render() {
    const { data, term, filter } = this.state;
    const allMoviesCount = data.length;
    const favouriteMoviesCount = data.filter(c => c.favourite).length;
    const visibleData = this.filterHandler(this.onSearchHandler(data, term), filter)
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo allMoviesCount={allMoviesCount} favouriteMoviesCount={favouriteMoviesCount} />
        </div>

        <div className="search-panel">
          <SearchPanel updateTermHandler={this.updateTermHandler} />
          <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler} />
        </div>
        <MovieList data={visibleData}
          onDelete={this.onDelete}

          onToggleProp={this.onToggleProp} />
        <MoviesAddForm addForm={this.addForm} />
      </div>
    );
  }
};

export default App;
