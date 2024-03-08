import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal.tsx'; // Import your Modal component
import AuthChecker from './auth/AuthChecker.tsx'; // Import your AuthChecker component
import './modal.css';

const Navbar = () => {
  const handleSignIn = () => {
    // Implement sign in logic
    // For demonstration purposes, assume the user is signed in successfully
    return <AuthChecker />;
  };

  return (
    <nav className='navbar bg-black navbar-expand-lg'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Lincoln NaviBar
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/' className='nav-link active' aria-current='page'>
                Main Pimp Screen
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Dashboard' className='nav-link active' aria-current='page'>
                Car Xzhibit
              </Link>
            </li>
            {/* Other navigation items */}
          </ul>
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Pimpgrades
            </button>
          </form>
          {/* Render the Sign In button */}
          <button className='btn btn-outline-primary' onClick={handleSignIn}>
            Create A Ticket
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;