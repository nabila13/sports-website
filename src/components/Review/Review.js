import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Review = (props) => {
    const {name,img,skill,review}=props.rv;
    return (
        <Col md={4} sm={6} xs={12} lg={4} className="gx-3 px-3 mx-auto d-flex justify-content-center align-items-center">
        <Card style={{height:"30rem"}} className='my-4'>
          <Card.Img variant="top" className='img-fluid' style={{height:"15rem"}} src={img} />
          <Card.Body className='py-2'>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Skilled At: {skill}</Card.Text>
            <Card.Text>
             {review}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Review;