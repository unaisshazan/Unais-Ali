import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Unais Ali </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />I am an Electronics Engineer from NED University. I am also running two companies 
            <br/> <a href="https://utech-edu.com"><span className="purple"> UTech Digital Education </span></a>  <br/>(A professional Coding Schools For Kids)
            <br/>
             <a href="https://asadacademy-edu.com"><span className="purple">Asad Academy</span></a> <br/> (International Homeschooling)
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Conducting Webinars
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Work hard untill you acheive success"{" "}
          </p>
          <footer className="blockquote-footer">Unais Ali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
