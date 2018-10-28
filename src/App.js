import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Container from './Components/Container/Container';
import './App.css';

const API_KEY = 'J8gAEM8BhLR3HnF0e1Uyo6YKAI0zvmCw';
const LIST_LIMIT = 20;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isContentSearch: true,
      isLoaded: false,
      error: null,
      GIFList: {
      },
      GIFDetailsId: null
    }
  }

  searchGif = async (e) => {
    let searchTerm = e.target.elements.searchText.value;
    this.setState({isContentSearch: true});
    this.setState({isLoaded: false});
    e.preventDefault();
    await fetch('https://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&limit=' + LIST_LIMIT + '&api_key=' + API_KEY)
      .then(response => response.json(), 
      (error) => {
        this.setState({error: error});
      })
      .then(data => {
        if(data) {
          this.setState({GIFList: data.data});
          this.setState({isLoaded: true});
        }
      });
  }

  setGIFDetailsId = (e) => {
    this.setState({isContentSearch: false});
    this.setState({GIFDetailsId: e.target.dataset.id});
  }
  
  render() {
    return (
      <>
        <Header search={this.searchGif}></Header>
        <div className="flex-container">
          <Container isSearchContent={this.state.isContentSearch} 
                      GIFList={this.state.GIFList} 
                      setGIFDetailsId={this.setGIFDetailsId} 
                      GIFDetailsId={this.state.GIFDetailsId}
                      error={this.state.error}
                      isLoaded={this.state.isLoaded}>
          </Container>
        </div>
      </>
    );
  }
}

export default App;
