import React from 'react';
import './projects.css';
import './App.css';
import TabGuard from './images/TabGuard.png';
import RatingPredictor from './images/rating_predictor.gif';
import C4ME from './images/c4me.png';
import MovieDirectory from './images/MovieDirectory.gif';

function Projects(){
    return(
        <div>
            <div className="project-container">
                <div className="container left">
                    <h3>CollegeD</h3>
                    <ul>
                        <li>Spearheaded the frontend for a single-page
                        application to help students manage their college
                        application process</li>
                        <li>Designed user-friendly
                            <a
                                href="https://www.figma.com/file/gqXwORcingsf1C9KH4wunN/C4ME?node-id=77%3A432"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                 wireframes
                            </a>
                            with Figma and built those
                            pages in the frontend with backend integration
                            and routing</li>
                        <li>Rendered an interactive scatter plot that
                        represents test score data of students who applied
                        to a selected college and their admission
                        decisions</li>
                        <li>Implemented pagination to showcase college and
                        high school card components</li>
                    </ul>
                </div>
                <div className="project-img-wrapper">
                    <div className="img-underlay c4me">
                        <div className="img-overlay">
                            <img src={C4ME} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-container">
                <div className="container left">
                    <h3>Rating Predictor</h3>
                    <ul>
                        <li>Implemented a sentiment analysis system with word
                        to vector embeddings to predict ratings given product
                        reviews</li>
                        <li>Optimized the rating predictor with user-factor
                        adaptation and computed predictions with Principal
                        Component Analysis</li>
                        <li>Applied deep learning principles by creating a
                        Long Short-Term Memory Network to further improve
                        predictions by 10%</li>
                    </ul>
                </div>
                <div className="project-img-wrapper">
                    <div className="img-underlay c4me">
                        <div className="img-overlay">
                            <img src={RatingPredictor} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-container">
                <div className="container left">
                    <h3>TabGuard</h3>
                    <ul>
                        <li>Developed a Chrome extension that alerts users of malicious
                        activity, tabnabbing, by using image comparison and allows
                        them to report the website to blacklist it</li>
                        <li>Designed and set up the frontend for the extension and
                        popup that notifies users that a website has been
                        blacklisted</li>
                        <li>Integrated the URL blacklisting feature in the frontend
                        with the backend and the AWS server</li>
                    </ul>
                </div>
                <div className="project-img-wrapper">
                    <div className="img-underlay tab">
                        <div className="img-overlay tab">
                            <img src={TabGuard} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-container">
                <div className="container left">
                    <h3>Movie Directory</h3>
                    <ul>
                        <li>Developed a static web application with a MVC architecture
                        that provides users information on movies using data from
                        IMDbPY package</li>
                        <li>Designed the frontend using Jinja2 templates and the
                        Semantic UI Framework</li>
                        <li>Implemented the backend of the project using a Flask
                        Framework and created a REST API</li>
                        <li>Stored data using SQLite3 and wrote queries to fetch
                        data depending on the transaction (ex. Search Movie by
                        Movie Name, Search Movies by Genre, Get All Directors,
                        etc.)</li>
                        <li>Created an ER Diagram and then used DDL statements
                        to establish the database schema and transactions</li>
                    </ul>
                </div>
                <div className="project-img-wrapper">
                    <div className="img-underlay c4me">
                        <div className="img-overlay">
                            <img src={MovieDirectory} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
