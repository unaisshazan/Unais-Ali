import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import raspi from "../../Assets/Projects/raspi.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
{/* done */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ChitChat"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/unaisshazan/facebook-messenger-clone"
            />
          </Col>
{/* done */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/unaisshazan/leaf-detection-using-tensorflow"
            />
          </Col>
{/* done */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://smallseotools.com/asets/ogimages/ocr.png"
              isBlog={false}
              title="IMAGE TO TEXT"
              description="The IMAGE TO TEXT project basically content images having text and extract text from the images"
              link="https://github.com/unaisshazan/image-to-text-python"
            />
          </Col>
{/* done */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="http://slideplayer.com/slide/7917966/25/images/1/Weather+Forecasting.jpg"
              isBlog={false}
              title="SMART REALTIME WEATHER FORCASTING"
              description="This application consists of sensor which detect temperature and humidty of agriculture field and act according to temperature when temperature decreases then motor will turn on other wise it will remain off ."
              link="https://github.com/unaisshazan/smart-weather-system"
            />
          </Col>
{/* done */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Suicidal Ideation Detection"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/unaisshazan/Sucidal-Post-detection"
            />
          </Col>
 {/* done */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition Using Android App"
              description="FACE RECOGNITION is very papular so I developed a application which do run time training of any person and recognize his/her face for forever in just 90mbs android app"
              link="https://github.com/unaisshazan/face-recognition-java"
            />
          </Col>
          {/* done */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://machinelearningknowledge.ai/wp-content/uploads/2020/06/Different-Types-of-Object-Detection-Algorithms-in-Nuthsell.jpg"
              isBlog={false}
              title="OBJECT DETECTION TENSOR FLOW"
              description="The REAL TIME OBJECT DETECTION is a project which makes computer smarter then human to detect things and name them .Because most of the things having difficult names but we dont know so object detection provide us their names without any mistakes .Its also very helpful to teach young generation in school"
              link="https://github.com/unaisshazan/level-3-real-time-object-detection-tensor-flow"
            />
          </Col>
          {/* done */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://hacksterio.s3.amazonaws.com/uploads/attachments/1198711/obstacle_avoiding_robot_using_arduino_uno_and_l293d_with_hc-sr04_sensor1_0whmQWyY7V.jpg"
              isBlog={false}
              title="OBSTACLE AVOIDING AND LINE FOLLOWER ROBOT"
              description="OBSTACLE AVOIDING AND LINE FOLLWER ROBOT are the electronic robot thats follows white path on a black surface and stops when it detects and obstacle on the road"
              link="https://github.com/unaisshazan/OBSTACLE-AVOIDING-ROBOTO-"
            />
          </Col>
          {/* done */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/practicaldev/image/fetch/s--aszaQhcG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/np9bg874b0sqphwxvts3.png"
              isBlog={false}
              title="EMOJI DETECTION"
              description="Humans have always had the innate ability to recognize and distinguish between faces. Now computers are able to do the same. This opens up tons of applications. Face detection and Recognition can be used to improve access and security like the latest Apple Iphone does (see gif below), allow payments to be processed without physical cards — iphone does this too!, enable criminal identification and allow personalized healthcare and other services"
              link="https://github.com/unaisshazan/emoji-detection"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://929687.smushcdn.com/2407837/wp-content/uploads/2020/08/ocr_handwriting_reco_result01.jpg?lossy=1&strip=1&webp=0"
              isBlog={false}
              title="HAND WRITTEN RECOGNITION"
              description="The HAND WRITTEN RECOGNITION is a project which convert very bad hand writting to good written .This projects have so many benifits just like some time we cant understand doctors handwritting and some time student could not understand teacher hand written on board so they can click picture of bad writting and programme will convert it into goodone"
              link="https://github.com/unaisshazan/hand-writting-recognization"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raspi}
              isBlog={false}
              title="RASPBERRY PI MINIBOT AND HOME AUTOMATION"
              description="The RASPBERRY PI MINI BOT is not only chatbot it will talk to you and automate your home according to you voice command .It can be use for security also if someone enter your house without permission this device catch him/her from anywhere and alert you that hey!! There is somebody"
              link="https://github.com/unaisshazan/raspberry-pi-face-animation.git"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raspi}
              isBlog={false}
              title="Ai on Microcontroller"
              description="I interface python with arduino and performed computer vission"
              link="https://github.com/unaisshazan/Artificial-Intelligence-on-Arduino-"
            />
          </Col>
        </Row>
      </Container>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Website Development Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few web development projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raspi}
              isBlog={false}
              title="UTech Digital Education"
              description="The fast evolving world of technology where everyone is competing to rise above the others and create the best possible lives with introduction of new technologies and alleviating lifestyles,U-Tech aims to enhance the creative and innovative minds of youngsters and produce the best developers."
              link="https://utech-edu.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raspi}
              isBlog={false}
              title="Asad Academy"
              description="Asad Academy is an online schooling platform that redefines learning to promote and enhance excellence by empowering students and educators, to thrive in a globally networked society, on a completely customized approach. No matter what you’re looking for, Asad Academy is ready to customize a program that works best for your child."
              link="https://asadacademy-edu.com/"
            />
          </Col>
          
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raspi}
              isBlog={false}
              title="Facebook Clone"
              description="React is created by facebook and i create facebook clone using react js"
              link="https://github.com/unaisshazan/facebook-clone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raspi}
              isBlog={false}
              title="Youtube Clone React js"
              description="Youtube clone using react js and some basic databases"
              link="https://github.com/unaisshazan/Youtube-Clone-React-Js"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raspi}
              isBlog={false}
              title="Netflix Clone React js"
              description="Dublicate Netflix using react js"
              link="https://github.com/unaisshazan/netflix_clone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raspi}
              isBlog={false}
              title="Blogging website"
              description="Django framework base Bloging website"
              link="https://github.com/unaisshazan/django-beloging-website-with-comments-post-share-complete-admin-panel"
            />
          </Col>

          <Col md={4} className="Signal Messenger">
            <ProjectCard
              imgPath={raspi}
              isBlog={false}
              title="Using React Native I developed Signal Messenger Clone Using React Native"
              description="Django framework base Bloging website"
              link="https://github.com/unaisshazan/signal-messenger-clone-react-native"
            />
          </Col>
          


          
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raspi}
              isBlog={false}
              title="Unais Ali E-Store"
              description="React Js Base Estore"
              link="https://github.com/unaisshazan/E-Store-React-js"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raspi}
              isBlog={false}
              title="Covid19 Tracker"
              description="This is a Real time Covid19 tracker where you can check globally as well as country wise people infected by cronavirus"
              link="https://github.com/unaisshazan/Covid19Tracker-Reactjs"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raspi}
              isBlog={false}
              title="Expense Tracker"
              description="Expense tracker is a calulator which calculate your daily expense"
              link="https://github.com/unaisshazan/expense-tracker-2020"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raspi}
              isBlog={false}
              title="Vehicle Routing Software"
              description="Send your pakage anywhere safely with navigation control"
              link="https://github.com/unaisshazan/saltnew"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raspi}
              isBlog={false}
              title="Beautiful Form"
              description="Stylish HTML & CSS form"
              link="https://github.com/unaisshazan/s-form"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
