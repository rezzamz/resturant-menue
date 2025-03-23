import React, { useRef } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { Restaurant, Fastfood, Icecream, LocalBar, SetMeal, LocalPizza, Spa } from '@mui/icons-material';
import items from '../data/item';
import './Menu.css';

const categories = [
  { id: 'starters', name: 'Starters', icon: <Restaurant /> },
  { id: 'main-courses', name: 'Main Courses', icon: <Fastfood /> },
  { id: 'desserts', name: 'Desserts', icon: <Icecream /> },
  { id: 'drinks', name: 'Drinks', icon: <LocalBar /> },
  { id: 'seafood', name: 'Seafood', icon: <SetMeal /> },
  { id: 'pizza', name: 'Pizza', icon: <LocalPizza /> },
  { id: 'vegetarian', name: 'Vegetarian', icon: <Spa /> },
];

const Menu: React.FC = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToCategory = (categoryId: string) => {
    const section = sectionRefs.current[categoryId];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="menu-container">
      <div className="sidebar">
        {categories.map((category) => (
          <div
            key={category.id}
            className="sidebar-item"
            onClick={() => scrollToCategory(category.id)}
          >
            <span className="icon">{category.icon}</span>
            <span className="sidebar-text">{category.name}</span>
          </div>
        ))}
      </div>
      <div className="main-section">
        <Card className="card-box">
          <div className="logo">Restaurant Logo</div>
          <Button variant="contained" color="primary" onClick={() => window.location.href = '/'}>
            Home
          </Button>
        </Card>
        {categories.map((category) => (
          <div
            key={category.id}
            id={category.id}
            ref={(el) => { sectionRefs.current[category.id] = el }}
            className="category-section"
          >
            <Typography variant="h4" color="primary">{category.name}</Typography>
            {items.filter(item => item.category === category.id).map(item => (
              <Card key={item.id} className="item-card" style={{ backgroundColor: '#f0f8ff' }}>
                <img src={item.image} alt={item.name} className="item-image" />
                <CardContent className="item-details">
                  <Typography variant="h5">{item.name}</Typography>
                  <Typography variant="body2">{item.description}</Typography>
                  <Typography variant="h6" color="secondary">${item.price}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;