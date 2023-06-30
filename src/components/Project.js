import React from "react";

function Project(props) {
    return (

        <div>
            <div className="project-page">
                {props.projects.map((project) => (
                    <div className="project-content">

                        <div id="project-image">
                            <a href={project.live} target="_blank" rel="noreferrer">
                                <img src={process.env.PUBLIC_URL + project.image} alt="Placeholder image" />
                            </a>
                        </div>

                        <div className="project-description">

                            <div>
                                <p className="title" key={project.id}>
                                    {project.title}
                                </p>
                            </div>

                            <div>
                                <p className="description" key={project.id}>
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <p className="languages" key={project.id}>
                                    Languages: {project.languages}
                                </p>
                            </div>

                            <div>
                                <a
                                    href={project.repo}
                                    className="card-footer-item"
                                    target="_blank" rel="noreferrer"
                                >
                                    See the Repo!
                                </a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>

    );
}

export default Project;