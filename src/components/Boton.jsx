import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ children, onClick, ...props }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        '&:hover': {
          background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};


const Boton = ({texto, onclick}) => {
    return <button onClick={onclick}>{texto}</button>;
};

export default Boton;
