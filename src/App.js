import React, { Component } from 'react';
import './App.css';
import Insert from './components/Insert/Insert';
import Search from './components/Search/Search';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { insert: true }
    this.clicky = this.clicky.bind(this);
  }
  
  clicky() {
    this.setState(prevState => ({
      insert: !prevState.insert
    }));
  }



  render() {
    return (
      <div className="app">
        <div className="toggle__header">
          <div className="toggle">
            <button onClick={this.clicky} disabled={this.state.insert}>Search</button>
            <button onClick={this.clicky} disabled={!this.state.insert}>Insert</button>
          </div>
        </div>
        

      {
        this.state.insert ? 
        (<div className="app__insert">
          <Insert />
          </div>)
        :
        (<div className="search">
          <Search />
          </div>)
      }
      </div>
      
    );
  }
  
}

export default App;
