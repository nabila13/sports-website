import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from './../Review/Review';

const Reviews = () => {
    const [review,setReview]=useState([]);
    useEffect(()=>{
        fetch("./review.json")
        .then(res=> res.json())
        .then(data=>{
            setReview(data);
        })
    },[]);
    return (
        <div>
            <h2 className='text-danger'>Reviews from Our Valuable Learners!</h2>
            <Container fluid>
        <Row xs={4} sm={2} md={2} className="g-4 mb-5">
            {
                review.map(rv=><Review
                key={rv.id}
                rv={rv}
                >
                </Review>)
            }
        </Row>
</Container>
        </div>
    );
};

export default Reviews;