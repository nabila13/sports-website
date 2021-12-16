import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const SingleCourse = (props) => {
    const {img,name,tutor,des,price}=props.cr;
    return (
        <Col md={4} sm={6} xs={12} lg={3} className="gx-3 px-3 mx-auto d-flex justify-content-center align-items-center">
      <Card style={{height:"33rem"}} className='my-4'>
        <Card.Img variant="top" className='img-fluid' style={{height:"15rem"}} src={img} />
        <Card.Body className='py-2'>
          <Card.Title>{name}</Card.Title>
          <Card.Text>instructor's Name: {tutor}</Card.Text>
          <Card.Text>
           {des}
          </Card.Text>
          <p>Course Price: ${price}</p>
        </Card.Body>
       <Card.Footer>
       <Button varient="info" className='w-50 mx-auto'>Enroll Now!</Button>
       </Card.Footer>
      </Card>
    </Col>
    );
};

export default SingleCourse;