import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Me from './images/personal_photo.png';
import { Navbar } from 'react-bootstrap';
import { Button, IconButton, Container } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';
import SkillTable from './table.js';
import Projects from './projects.js';
import Blog from './blog.js';
import Interests from './interests.js';

function App() {
  return (
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div>
            <Navbar className="header-bar">
                <Navbar.Brand> <h1>Amy Shin </h1></Navbar.Brand>
                <div className="links">
                    <Button href="#about-me">About Me</Button>
                    <Button href="#projects">Projects</Button>
                    <Button href="#skills">Skills</Button>
                    <Button href="#blog">Blog</Button>
                </div>
            </Navbar>

            <div id="about-me" className="container">
                <div className="text-wrapper">
                    <h1> Hey, I'm Amy </h1>
                    <p> I am an aspiring software engineer currently seeking a full
                    time position in NYC. I recently graduated from Stony Brook
                    University with a B.S. in Computer Science. My most recent
                    project is this personal website. I hope you enjoy! </p>
                </div>
                <div className="img-wrapper">
                    <img className="img-size" src={Me} alt=""/>
                </div>

            </div>

            <div id="interests">
                <h1> Interests </h1>
                <Interests/>
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

            <div id="blog" className="resume-container">
                <h1> Blog </h1>
                <Blog/>
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
