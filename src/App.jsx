import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Home from "./views/Home";
import Login from "./views/Login"
import { theme } from './theme/theme';
import './App.css'
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import { AuthProvider, useAuth } from './context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

const AppContent = () => {
  const { user } = useAuth();
  
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <CssBaseline />
      <AppBar />
      <Box sx={{ flex: 1, mt: '64px' }}>
        <Routes>
          <Route path="/" element={!user ? <Login /> : <Navigate to="/home" />} />
          <Route path="/home" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App
