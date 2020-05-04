import React, { Fragment } from "react";
import viksa from "../../img/viksa.jpg";

const About = () => {
  return (
    <Fragment>
      <div className="card grid-2">
        <div className="all-center my-2">
          <img
            src={viksa}
            className="round-img"
            alt=""
            style={{ width: "300px", height: "250px" }}
          />
          <h1>Vikram Singh Rajpurohit</h1>
          <p>Location: Gandhinagar</p>
        </div>
        <div>
          <div>
            <h3>About Me:</h3>
            <p>
              I'm a front end developer with more than 5 years of experience. I
              have worked on HTML5, CSS3, Javascript, ES6, React JS, Redux.
            </p>
          </div>
          <div className="py-3">
            <h3>About Website:</h3>
            <p>
              This is a Github User Finder application, in which one an enter
              the github username and get the details from github. Site is
              created with React Js library with Context Api and hooks.
            </p>
          </div>
          <div>
            <h3>Connect With Me:</h3>
            <div>
              <a
                href="https://www.facebook.com/vikramsingh.rajpurohit.125"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-facebook fa-2x"
                  style={{ marginRight: "10px" }}
                ></i>
              </a>
              <a
                href="https://twitter.com/being_viksa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-twitter fa-2x"
                  style={{ marginRight: "10px" }}
                ></i>
              </a>
              <a
                href="https://www.instagram.com/being_viksa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-instagram fa-2x"
                  style={{ marginRight: "10px" }}
                ></i>
              </a>
              <a
                href="https://www.google.com/gmail/about/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fas fa-envelope-square fa-2x"
                  style={{ marginRight: "10px" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
