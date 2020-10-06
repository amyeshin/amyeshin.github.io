import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Me from './images/personal_photo.png';
import { Navbar, Nav } from 'react-bootstrap';
import { Button, IconButton, Container } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';
import SkillTable from './table.js';
import Projects from './projects.js';

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
                    <Button href="#skills">Skills</Button>
                    <Button>Blog</Button>
                </div>
            </Navbar>

            <div id="about-me" className="info-container">
                <div className="text-wrapper">
                    <h1> Hello </h1>
                    I recently graduated from Stony Brook University with a B.S. in Computer Science.
                    Currently, I am seeking a full time software engineering position in NYC.
                    My interests include hiking, baking focaccia bread, and my dog Johnny.
                </div>
                <div className="img-wrapper">
                    <img className="img-size" src={Me} alt=""/>
                </div>
            </div>

            <div className="resume-container">
                <div id="projects">
                    <h1> Projects </h1>
                    <Projects/>
                </div>
                <div id="skills">
                    <h1> Skills </h1>
                    <SkillTable/>
                </div>
                <div className="center-container">
                    <Link to="/files/Amy Shin Resume.pdf" target="_blank" download>
                        <Button variant="contained">Download CV</Button>
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
                    <IconButton onClick={() => window.open('https://amyeshin.wixsite.com/blog')}>
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
