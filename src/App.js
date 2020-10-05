import React from 'react';
import './App.css';
import Me from './personal_photo.png';
import { Navbar, Nav } from 'react-bootstrap';
import { Button, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebAssetIcon from '@material-ui/icons/WebAsset';

function App() {
  return (
    <div>
        <Navbar bg="light" variant="light" className="header-bar">
            <h2>Amy Shin</h2>
            <div className="links">
                <Button>About Me</Button>
                <Button>Projects</Button>
                <Button>Blog</Button>
                <Button>Contact</Button>
            </div>
        </Navbar>
        <div className="info-container">
            <div className="text-wrapper">
                <h1> Hello </h1>
                I recently graduated from Stony Brook
                University with a B.S. in Computer Science. My interests include hiking,
                baking focaccia bread, and my dog Johnny.
            </div>
            <div className="img-wrapper">
                <img className="img-size" src={Me} alt=""/>
            </div>
        </div>
        <div className="center-container">
        <div className="icon-container">
            <IconButton onClick={() => window.open('https://www.Linkedin.com/in/amyeshin/')}>
                <LinkedInIcon/>
            </IconButton>
            <IconButton onClick={() => window.open('https://github.com/amyeshin')}>
                <GitHubIcon/>
            </IconButton>
            <IconButton onClick={() => window.open('https://www.Linkedin.com/in/amyeshin/')}>
                <WebAssetIcon/>
            </IconButton>
        </div>
        </div>
    </div>
  );
}

export default App;
