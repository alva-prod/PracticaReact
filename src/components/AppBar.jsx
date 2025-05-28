import React from 'react';
import { AppBar as MuiAppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AppBar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user) return null;

    return (
        <MuiAppBar 
            position="fixed" 
            sx={{
                width: '100%',
                left: 0,
                background: (theme) => 
                    theme.palette.mode === 'dark' 
                        ? 'rgba(30, 30, 30, 0.95)'
                        : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                boxShadow: 3,
            }}
        >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>
                <Box>
                    <Button 
                        color="inherit" 
                        onClick={() => navigate('/home')}
                        sx={{ mx: 1 }}
                    >
                        Home
                    </Button>
                    <Button 
                        color="secondary" 
                        onClick={handleLogout}
                        variant="contained"
                        sx={{ 
                            mx: 1,
                            '&:hover': {
                                backgroundColor: 'error.main',
                            }
                        }}
                    >
                        Logout
                    </Button>
                </Box>
            </Toolbar>
        </MuiAppBar>
    );
};


export default AppBar;