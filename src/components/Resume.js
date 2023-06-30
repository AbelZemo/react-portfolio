import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function Resume() {
    return (
        <div className="resume">
            <div className="column">
                <p className="content is-medium">Resume</p>
                <a
                    className="button is-primary"
                    href={process.env.PUBLIC_URL + "/Abel_Zemo_RESUME.txt"}
                    target="_blank" rel="noreferrer"
                    download="abel_zemo_resume"
                >
                    <span className="icon">
                        <i className="fas fa-download"></i>
                    </span>
                    <span id="download">Download My Resume</span>
                </a>
            </div>
            <div className="column">
                <p className="content is-medium">Skills</p>
                <ul>
                    <li> HTML<ProgressBar completed={100} /> </li>
                    <li> CSS<ProgressBar completed={100} /> </li>
                    <li> Github Repo Management<ProgressBar completed={100} /> </li>
                    <li> JSON<ProgressBar completed={100} /> </li>
                    <li> Git<ProgressBar completed={100} /> </li>
                    <li> SQL<ProgressBar completed={100} /> </li>
                    <li> Javascript<ProgressBar completed={90} /> </li>
                    <li> React<ProgressBar completed={90} /> </li>
                    <li> Handlebars <ProgressBar completed={90} /> </li>
                    <li> NoSQL<ProgressBar completed={80} /> </li>
                    <li> Python<ProgressBar completed={80} /> </li>

                </ul>
            </div>
        </div>
    );
}

export default Resume;