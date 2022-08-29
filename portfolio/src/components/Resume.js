import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowRightCircle } from 'react-bootstrap-icons'
import ResumePDF from '../assets/resume/JasonDongResume0819.pdf'
import Goldman from '../assets/company_pictures/goldman.png'
import Duke from '../assets/company_pictures/duke.png'
import AFLCMC from '../assets/company_pictures/aflcmc.png'
import AFRL from '../assets/company_pictures/afrl.png'


function Resume() {

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

  return (
    <section className="resume" id="resume">
        <Container>
            <Row>
                <Col>
                    <div className="resume-bx">
                    <h2>Resume</h2>
                    <p>Some cool places I've worked.</p>
                    
                    <Container className='d-flex flex-column' style={{gap: "50px"}}>
                    <a href={ResumePDF} target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>                    
                            <button className='button-clk' style={{color: 'black'}}><h4>View Resume <ArrowRightCircle size={25}/></h4></button>
                    </a>
                    
                    <Carousel 
                    responsive={responsive} 
                    className='resume-slider'
                    // autoPlay={true}
                    // autoPlaySpeed={1000}
                    // shouldResetAutoplay={true}
                    >
                        <div className='item'>
                            <img src={Goldman} alt="gs pic" />
                            <h5>Goldman Sachs</h5>
                            <h6>JUL 2022 - Current</h6>
                            <p>Full Stack Software Engineer on GS Select Private Banking Team.</p>
                        </div>

                        <div className='item'>
                            <img src={Duke} alt="duke pic" />
                            <h5>Duke University</h5>
                            <h6>JAN 2021 - MAY 2022</h6>
                            <p>Teaching Assistant for ECE/CS classes and research assistant in I^3T Lab.</p>
                        </div>

                        <div className='item'>
                            <img src={AFLCMC} alt="aflcmc pic" />
                            <h5>Air Force LCMC - Electronic Warfare Division</h5>
                            <h6>JUN 2021 - AUG 2021</h6>
                            <p>Electrical/Software Intern building antennas and writing software to track and model airplanes.</p>
                        </div>

                        <div className='item'>
                            <img src={AFLCMC} alt="aflcmc pic" />
                            <h5>Air Force LCMC - Electronic Warfare Division</h5>
                            <h6>MAY 2020 - AUG 2020</h6>
                            <p>Electrical/Software Intern building and writing software for remote solar power stations.</p>
                        </div>

                        <div className='item'>
                            <img src={AFRL} alt="afrl pic" />
                            <h5>Air Force Research Laboratory</h5>
                            <h6>MAY 2019 - AUG 2019</h6>
                            <p>Engineering Intern focusin on drone research and working in materials lab.</p>
                        </div>
                    </Carousel>
                    </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Resume