import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);    const login = async (credentials) => {
        try {
            // Here you would typically make an API call to your backend
            // For now, we'll simulate a successful login with mock credentials
            if (credentials.username === "admin" && credentials.password === "safePassword123") {
                setUser({ username: credentials.username });
                return true;
            }
            return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
