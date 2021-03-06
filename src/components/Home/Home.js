import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Carousel, Container, Row } from 'react-bootstrap';
import img from '../../image/banner11.jpg';
import img2 from '../../image/banner22.jpg';
import img3 from '../../image/banner1.jpeg';

import './Home.css';
import ShortlistedCourse from './../ShortlistedCourse/ShortlistedCourse';
const Home = () => {
  const styles={
    height: "35rem",
    marginBottom:"20px"
  }

  const [courses,setCourses]=useState([]);
  useEffect(()=>{
    fetch('./data.json')
    .then(res=> res.json())
    .then(data=>{
      setCourses(data);
    })
  },[]);
  const shortlistedCourses=courses.slice(0,4);

    return (
        <div>
            <div className="top">
                <h2 className='fw-bold text-danger'animation="glow">Welcome into the exciting world of sports!!</h2>
            </div>
            <Carousel fade style={styles} className="mb-5 mt-lg-5 mt-0">
  <Carousel.Item>
    <img
      style={{height:"35rem"}}
      className="d-block w-100 mb-5"
      src={img}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:"35rem"}}
      className="d-block w-100 mb-5"
      src={img2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:"35rem"}}
      className="d-block w-100 mb-5"
      src={img3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
<div className="middle container-fluid mb-5">
    <h1 className="mx-auto my-5">Website statistics since beginning</h1>
    <div className="d-flex w-100 flex-lg-row middleware flex-md-row flex-sm-column flex-column justify-content-lg-evenly justify-content-md-evenly justify-content-sm-center justify-content-center align-items-center container-fluid">
    <div>
        <h2><CountUp delay={1.5} end={34100} duration={4} redraw={true}>
            </CountUp>+</h2>
        <h6>total enrolled students</h6>
    </div>
    <div>
        <h2><CountUp delay={1.5} end={1400} duration={4} redraw={true}>
            </CountUp>+</h2>
        <h6>total tutors</h6>
    </div>
    <div>
        <h2><CountUp end={25} delay={1.5} duration={4} redraw={true}>
            </CountUp>+</h2>
        <h6>total courses</h6>
    </div>
    <div>
        <h2><CountUp end={8900} delay={1.5} duration={4}redraw={true}>
            </CountUp>+</h2>
        <h6>happy reviews</h6>
    </div>
    </div>
</div>
<div className="container">
        <h2>Trending Courses</h2>
        <hr />
        <Container fluid>
        <Row xs={4} sm={2} md={2} className="g-4 mb-5">
            {
                shortlistedCourses.map(course=><ShortlistedCourse
                key={course.id}
                course={course}
                >

                </ShortlistedCourse>)
            }
</Row>
</Container>
    </div>
    <div className="middle container-fluid mb-5">
    <h1 className="mx-auto my-5">Our Branches' Inside Asia</h1>
    <div className="d-flex w-100 flex-lg-row middleware flex-md-row flex-sm-column flex-column justify-content-lg-evenly justify-content-md-evenly justify-content-sm-center justify-content-center align-items-center container-fluid">
    <div className='d-flex mb-3 flex-column justify-content-center align-items-center'>
      <div className='mb-4'>
        <h4 className='fw-bold fst-italic'><CountUp delay={3.5} end={20} duration={4}>
            </CountUp>+</h4>
            <h6 className='fw-bold fst-italic'>in Bangladesh</h6>
      </div>
      <div>
        <h4 className='fw-bold fst-italic'><CountUp delay={3.5} end={12} duration={4}>
            </CountUp>+</h4>
            <h6 className='fw-bold fst-italic'>in Nepal</h6>
      </div>
    </div>
    <div className='d-flex mb-3 flex-column justify-content-center align-items-center'>
      <div className='mb-4'>
        <h4 className='fw-bold fst-italic'><CountUp delay={3.5} end={40} duration={4}>
            </CountUp>+</h4>
            <h6 className='fw-bold fst-italic'>in India</h6>
      </div>
      <div>
        <h4 className='fw-bold fst-italic'><CountUp delay={3.5} end={50} duration={4}>
            </CountUp>+</h4>
            <h6 className='fw-bold fst-italic'>in China</h6>
      </div>
    </div>
    <div className='d-flex flex-column mb-3 justify-content-center align-items-center'>
      <div className='mb-4'>
        <h4 className='fw-bold fst-italic'><CountUp delay={3.5} end={25} duration={4}>
            </CountUp>+</h4>
            <h6 className='fw-bold fst-italic'>in Malaysia</h6>
      </div>
      <div>
        <h4 className='fw-bold fst-italic'><CountUp delay={3.5} end={30} duration={4}>
            </CountUp>+</h4>
            <h6 className='fw-bold fst-italic'>in Japan</h6>
      </div>
    </div>
    <div className='d-flex flex-column mb-3 justify-content-center align-items-center'>
      <div className='mb-4'>
        <h4 className='fw-bold fst-italic'><CountUp delay={3.5} end={11} duration={4}>
            </CountUp>+</h4>
            <h6 className='fw-bold fst-italic'>in Vietnam</h6>
      </div>
      <div>
        <h4 className='fw-bold fst-italic'><CountUp delay={3.5} end={18} duration={4}>
            </CountUp>+</h4>
            <h6 className='fw-bold fst-italic'>in Afganistan</h6>
      </div>
    </div>

               </div>
           </div>
     </div>
    );
};

export default Home;