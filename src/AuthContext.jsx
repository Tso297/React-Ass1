import React, { createContext, useContext, useState } from 'react';
import jwt_decode from 'jwt-decode'; // Import JWT decoding library

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial state to false
  const [token, setToken] = useState(null); // State to store JWT token

  const login = (jwtToken) => {
    // Decode JWT token to extract user information
    const decodedToken = jwt_decode(jwtToken);

    // Set the decoded token and update isLoggedIn state
    setToken(decodedToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Clear token and update isLoggedIn state
    setToken(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);