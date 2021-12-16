import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
const About = () => {
    return (
        <Container>
        <Row className="my-5">
          <Col xs={12} md={6} sm={6}>
            <Row>
                <Col xs={6} sm={5} md={5} className="left1">

                </Col>
              <Col xs={6} sm={5} md={5} className="left2">

              </Col>
            </Row>
            <Row>
            <Col xs={6} sm={5} md={5} className="right1">

                </Col>
              <Col xs={6} sm={5} md={5} className="right2">

              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={6} className="d-flex flex-column justify-content-center align-items-md-start align-items-sm-center align-items-center align-items-lg-start">
          <h1>About Us</h1>
<hr />
<p className="text-start">we are trying to establish an online platform to develop skill and have efficiency on different foreign and Native sports genres, as we all are busy with our daily schedule,so it is hard for some of us to attend the sports training in person after balancing the daily works or classes or study. we are eagerly waiting for you to join our platform and have our services at minimum cost. <br /><br />
you can contact with our former students and know about the platform easily. we are trying to establish a forum for chatting with our instructors and the former students as well if you get stuck anywhere under the courses, and get instant  help.
</p>
          </Col>
        </Row>
      </Container>
    );
};

export default About;