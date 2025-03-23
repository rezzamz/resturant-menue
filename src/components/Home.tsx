import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate('/menu');
  };

  return (
    <div className="home">
      <h1>Welcome to Our Cartoon Restaurant</h1>
      <Button variant="contained" color="primary" onClick={goToMenu}>
        Go to Menu
      </Button>
    </div>
  );
};

export default Home;