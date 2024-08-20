// src/GoogleButton.jsx
import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const GoogleButton = ({ onSuccess, onError }) => {
  const handleGoogleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      onSuccess(user);
    } catch (error) {
      onError(error);
    }
  };

  return (
    <button onClick={handleGoogleSignIn} style={googleButtonStyle}>
      Sign in with Google
    </button>
  );
};

const googleButtonStyle = {
  backgroundColor: '#4285F4',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '10px',
};

export default GoogleButton;
