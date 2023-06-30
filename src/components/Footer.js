import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>My Full Stack Single Page App Development Portfolio</strong>
                    <hr />
                    <a
                        href="https://www.linkedin.com/in/AbelZemo/"
                        target="_blank" rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                    {" "}
                    |{" "}{" "}
                    <a href="https://github.com/AbelZemo" target="_blank" rel="noreferrer">
                        Github
                    </a>

                    {" "}
                    |{" "}{" "}
                    <a href="abelzemo@gmail.com">Email</a>

                    {" "}
                    |{" "}{" "}
                    <a href="https://www.facebook.com/abel.negasi.18">Facebook</a>

                </p>
            </div>
        </footer>
    );
}

export default Footer;