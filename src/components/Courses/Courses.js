import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Spinner, Row } from 'react-bootstrap';
import SingleCourse from '../SingleCourse/SingleCourse';
const Courses = () => {
    const [course, setCourse]=useState([]);
 useEffect(()=>{
     fetch("./data.json")
     .then(res=>res.json())
     .then(data=>{
         setCourse(data);
     })
 },[]);
    return (
        <div>
        <h2 className='mx-auto text-danger fw-bolder my-5'>Top Running Courses!!</h2>
<Container fluid>
{course.length===0? <Spinner animation="grow" variant="danger" />:
  <Row>
  {
      course.map(cr=><SingleCourse
      key={cr.id}
      cr={cr}>
      </SingleCourse>)

  }
</Row>
}
</Container>
    </div>
    );
};

export default Courses;