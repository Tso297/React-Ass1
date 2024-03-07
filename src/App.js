import React, { Component } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import { Provider } from 'react-redux';
import Inventory from './Inventory';
import DataTable from './Table.tsx'; // Import DataTable component
import { store } from './redux/store.ts';
import Dashboard from './Dashboard.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: 'Travis',
        email: 'torcsh30@gmail.com',
        isLoggedIn: true
      }
    }
  }

  render() {
    const { user } = this.state;

    return (
      <Provider store={store}>
        <div className="App">
          <HashRouter>
            <Navbar user={user} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/Dashboard" element={<Dashboard isLoggedIn={user.isLoggedIn} />} /> {/* Pass isLoggedIn prop to Dashboard */}
            </Routes>
          </HashRouter>
        </div>
      </Provider>
    )
  }
}