import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Me from './personal_photo.png';
import { Navbar, Nav } from 'react-bootstrap';
import { Button, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';

function App() {
  return (
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div>
            <Navbar bg="light" variant="light" className="header-bar">
                <h1>Amy Shin</h1>
                <div className="links">
                    <Button href="#about-me">About Me</Button>
                    <Button href="#projects">Projects</Button>
                    <Button>Blog</Button>
                    <Button href="#contact">Contact</Button>
                </div>
            </Navbar>

            <div id="about-me" className="info-container">
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

            <div id="projects" className="project-container">
                <h1> Projects </h1>
                <h1> Skills </h1>
                <div className="cv-button">
                    <Link to="/files/Amy Shin Resume.pdf" target="_blank" download>
                        <Button>Download CV</Button>
                    </Link>
                </div>
            </div>

            <div className="center-container">
                <div id="contact" className="icon-container">
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
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
