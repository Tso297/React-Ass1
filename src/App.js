import React, { Component } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import { Provider } from 'react-redux';
import Inventory from './Inventory';
import { store } from './redux/store.ts';
import Dashboard from './Dashboard.jsx';
import AuthChecker from './auth/AuthChecker.tsx';

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
      <HashRouter>
        <Provider store={store}>
          <div className="App">
            <Navbar user={user} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/inventory" element={<Inventory />} />
              {/* Wrap the Dashboard route with AuthChecker */}
              <Route path="/Dashboard" element={<AuthChecker><Dashboard isLoggedIn={user.isLoggedIn} /></AuthChecker>} />
            </Routes>
          </div>
        </Provider>
      </HashRouter>
    )
  }
}