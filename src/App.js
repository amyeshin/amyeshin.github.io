import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div>
        <Navbar bg="light" variant="light" className="header-bar">
            <h2>Amy Shin</h2>
            <div className="links">
                <Button>Home</Button>
                <Button>Resume</Button>
                <Button>Blog</Button>
            </div>
        </Navbar>
    </div>
  );
}

export default App;
