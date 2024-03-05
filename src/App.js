import React, { Component } from 'react'
import Navbar from './Navbar';
import Home from './Home';
import Inventory from './Inventory';
import DataForm from './Data';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      user: {
        username: 'Travis',
        email: 'torcsh30@gmail.com'
      }
    }
  }
  
  
  
  
  
  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user}/>

        <Home />

        <Inventory />

        <DataForm />



      </div>
    )
  }
}
