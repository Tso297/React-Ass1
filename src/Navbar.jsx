import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal.tsx'; // Import your Modal component
import ContactForm from './ContactForm.tsx'; // Import your ContactForm component
import './modal.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [userSignedIn, setUserSignedIn] = useState(false); // Define userSignedIn state
  const [signInFormVisible, setSignInFormVisible] = useState(false);
  const [signUpFormVisible, setSignUpFormVisible] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    // Implement sign in logic
    setUserSignedIn(true);
    setSignInFormVisible(false);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Implement sign up logic
    // Assuming successful sign up sets userSignedIn state to true
    setUserSignedIn(true);
    setSignUpFormVisible(false);
  };

  const handleSignOut = () => {
    // Implement sign out logic
    setUserSignedIn(false);
  };

  return (
    <nav className='navbar navbar-expand-lg'>
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
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Dashboard' className='nav-link active' aria-current='page'>
                Dashboard
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
              Search
            </button>
          </form>
          {/* Conditional rendering for sign in, sign up, and sign out buttons */}
          {userSignedIn ? (
            // If the user is signed in
            <button className='btn btn-outline-danger' onClick={handleSignOut}>
              Sign Out
            </button>
          ) : (
            // If the user is not signed in
            <>
              <button className='btn btn-outline-primary' onClick={() => setSignInFormVisible(true)}>
                Sign In
              </button>
              <button className='btn btn-outline-primary' onClick={() => setSignUpFormVisible(true)}>
                Sign Up
              </button>
            </>
          )}
          {/* Button to open the modal */}
          <button className='btn btn-outline-primary' onClick={() => setIsVisible(true)}>
            Pimp Your Ride
          </button>
        </div>
      </div>
      {/* Render the modal component */}
      <Modal open={isVisible} onClose={() => setIsVisible(false)}>
        {/* Render the ContactForm component */}
        <ContactForm />
      </Modal>
      {/* Sign In Form */}
      {signInFormVisible && (
        <form className="sign-in-form" onSubmit={handleSignIn}>
          {/* Sign In form elements go here */}
          <button type="submit">Sign In</button>
        </form>
      )}
      {/* Sign Up Form */}
      {signUpFormVisible && (
        <form className="sign-up-form" onSubmit={handleSignUp}>
          {/* Sign Up form elements go here */}
          <button type="submit">Sign Up</button>
        </form>
      )}
    </nav>
  );
};

export default Navbar;