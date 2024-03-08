import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, Providers } from '../config/firebase.ts';

interface Props {
  children: React.ReactNode;
  signInAndExecuteCRUD: () => void; // Pass signInAndExecuteCRUD function as prop
}

const AuthChecker = ({ children, signInAndExecuteCRUD }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      // Check if the user is not already signed in
      if (!auth.currentUser) {
        try {
          // Sign in with Google provider when the component mounts
          await signInWithPopup(auth, Providers.google);
          // After successful sign-in, execute CRUD operation
          signInAndExecuteCRUD();
        } catch (error) {
          // Handle sign-in error
          console.error("Failed to sign in:", error);
          // Navigate to home page or display an error message
          navigate('/');
        }
      }
    };

    // Call the checkAuthentication function when the component mounts
    checkAuthentication();
  }, []); // Empty dependency array ensures this effect runs only once

  return <>{children}</>;
};

export default AuthChecker;