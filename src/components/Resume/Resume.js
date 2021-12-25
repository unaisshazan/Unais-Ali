import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";

import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href="https://drive.google.com/file/d/1xOEgJsMVLDea_bLbfh2JDnaENzKv8nnP/view" target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
          <h3 className="resume-title">Startups & Companies</h3>
            <Resumecontent
              title="CEO At UTech  Digital Education[Online Coding School For kids]"
              content={[
                "An online coding school which will teach you 60+ latest specializations include React Js , React Native,Ai , Ml and Much more under the age of 15",
              ]}
            />
                
            <Resumecontent
              title="CEO At Asad Academy [Online Home Schooling Academy]"
              content={[
                "Asad Academy is an online schooling platform that redefines learning to promote and enhance excellence by empowering students and educators, to thrive in a globally networked society, on a completely customized approach. No matter what you’re looking for, Asad Academy is ready to customize a program that works best for your child.",
              ]}
            />
                <Resumecontent
              title="Founder of OUTLIERIFY [Next Generation Education system]"
              content={[
                "Entreprenuership learning school at young age with practical business,softskills and mentorship",
              ]}
            />
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Lecturer [Ziauddin University]"
              date="Dec 2021 - Present"
              content={[
                "BEE (Basic Electrical Engineering) Lecturer at Ziauddin University",
                
              ]}
            />
                <Resumecontent
              title="Mobile & Web Developer [SBE Shipping Lines]"
              date="Sept 2021 - Present"
              content={[
                "SBE Shipping Lines is Dubai base cargo shipping company",
                
              ]}
            />
            <Resumecontent
              title="Frontend Developer Intern [Lambda Theeta Software House]"
              date="Dec 2019 - September 2020"
              content={[
                "Worked on the development of an Routing Software website",
                
              ]}
            />
                     <Resumecontent
              title="Project Developer Intern [Instrumentation Center, Ned University]"
              date="Dec 2019 - September 2020"
              content={[
                "Worked as a 3D designer",
                "Worked as an Arduino Programmer",
                "Worked as a Machine Learning Projects Developer",
               
                
              ]}
            />
         
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Electronics Engineering [NED University, Karachi]"
              date="2017 - 2021"
              content={[`(CGPA: 3.6)`]}
            />
                  <Resumecontent
              title="Intermediate [Govt Dehli Science College, Karachi]"
              date="2016 - 2027"
              content={[`(Grade: A1)`]}
            />
     <Resumecontent
              title="Matric From : The Foundataion Grammer School"
              date="2016"
              content={[`(Grade: A)`]}
            />
            <h3 className="resume-title">Final Year Project</h3>
            <Resumecontent
              title="SENTIMENTS ANALYSIS"
              content={[
                "Sentiment Analysis Using Automated Facial Recognition with Jetson nano and web app using React js",
              ]}
            />
                   


            {/* <h3 className="resume-title">Achivements & Certificates</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
             
            /> */}
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href="https://drive.google.com/file/d/1xOEgJsMVLDea_bLbfh2JDnaENzKv8nnP/view" target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
