import React from 'react';
import './projects.css';
import './App.css';
import TabGuard from './TabGuard.png';

function Projects(){
    return(
        <div>
            <div className="project-container">
                <h3>C4ME</h3>

            </div>
            <div className="project-container">
                <h3>Rating Predictor</h3>

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
