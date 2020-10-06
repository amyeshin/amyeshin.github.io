import React from 'react';
import './projects.css';
import './App.css';
import TabGuard from './TabGuard.png';

function Projects(){
    return(
        <div>
            <div className="project-container">
                <h3>C4ME</h3>
                <div className="info-container">
                    <div className="bullet-wrapper">
                        <ul>
                            <li>Spearheaded the frontend for a single-page
                            application to help students manage their college
                            application process</li>
                            <li>Designed wireframes with Figma and built those
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
                        <img className="tabguard-size" src={TabGuard} alt="" />
                    </div>
                </div>
            </div>

            <div className="project-container">
                <h3>Rating Predictor</h3>
                <div className="info-container">
                    <div className="bullet-wrapper">
                        <ul>
                            <li>Implemented a sentiment analysis system with word
                            to vector embeddings to predict ratings given product
                            reviews</li>
                            <li>Optimized the rating predictor with user-factor
                            adaptation and computed predictions with Principal
                            Component Analysis</li>
                            <li>Applied deep learning principles by creating a
                            Long Short-Term Memory Network to further improve
                            predictions by 2%</li>
                        </ul>
                    </div>
                    <div className="project-img-wrapper">
                        <img className="tabguard-size" src={TabGuard} alt="" />
                    </div>
                </div>
            </div>
            <div className="project-container">
                <h3>TabGuard</h3>
                <div className="info-container">
                    <div className="bullet-wrapper">
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
                        <img className="tabguard-size" src={TabGuard} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
