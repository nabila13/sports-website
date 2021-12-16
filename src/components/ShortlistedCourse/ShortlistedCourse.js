import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ShortlistedCourse = (props) => {
    const {id,img,name,tutor,des,price}=props.course;
    let styles1={
        width: "15rem",
        height:"30rem",
    }
    return (
<Col md={3} sm={6} xs={12} lg={3} className="gx-3 px-3 mx-auto d-flex justify-content-center align-items-center">
    <Card style={styles1}>
  <Card.Img variant="top" src={img} width="300px" height="300px"/>
  <Card.Body>
    <Card.Title>{name}</Card.Title>

    <Card.Text>
      Instructor's Name: {tutor}
    </Card.Text>
    <Card.Text>
      Course enrollment Fee: {price}$
    </Card.Text>
  </Card.Body>
</Card>
    </Col>
    );
};

export default ShortlistedCourse;