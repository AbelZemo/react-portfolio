import React from "react";

function About() {
    return (
        <div className="about">
            <div className="welcome">
                <img className="welcome-pic" src={process.env.PUBLIC_URL + '/image/welcome.png'} alt="welcome page" />
            </div>
            <div className="about-page">
                <img className="profile-pic" src={process.env.PUBLIC_URL + '/image/profile.jpeg'} alt="Abel Zemo Profile Picture" />
                <div className="about-content">
                    <p>
                        My name is abel zemo and I'm currentley living in Iowa since 2017.
                        My profession is web developer and I love this profession.
                        It has many many challenges to learn it and spend a lot of time but it's very demand profession.
                        Since join learning this profession I love spend my time depend on this profession and trying to learn more and more to be a successful and good developer.
                        After work I love to spend my time with my family plus I love to watch NBA games.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;