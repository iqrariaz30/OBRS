import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  
  const login = (credentials) => {
    // Add your actual authentication logic here
    setIsAdminAuthenticated(true);
  };
  
  const logout = () => {
    setIsAdminAuthenticated(false);
  };
  
  return (
    <AuthContext.Provider value={{ isAdminAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create the useAuth hook for easy context access
export const useAuth = () => {
  return React.useContext(AuthContext);
};