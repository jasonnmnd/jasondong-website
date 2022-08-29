import React, { useEffect, useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import ProfileImage from '../assets/profile-img.png'
import BackgroundDesktop from '../assets/banner-bg3.png'
import BackgroundMobile from '../assets/banner-bg2.png'
import TrackVisibility from 'react-on-screen';
import 'animate.css';


function Banner() {

  const[loopNum, setLoopNum] = useState(0);
  const[isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Software Engineer', 'Web Developer', 'Foodie'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const [index, setIndex] = useState(1);

  useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    }, delta)

    return() => {clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
        setDelta(prevDelta => prevDelta / 1.9);
    }

    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
    } else if(isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
    } else {
        setIndex(prevIndex => prevIndex + 1);
    }
    }

    //Use plain background for now
    const imgToUse = window.innerWidth >= 1500 ? BackgroundMobile : BackgroundMobile; 

  return (
    <section className='banner' id='home' style={{backgroundImage: `url(${imgToUse})`}}>
        <Container>
            <Row className='align-items-top'>
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        {/* <span className='tagline'>Welcome to my website</span> */}
                        <h1>{`Hi! I'm Jason, a `} <span className="txt-rotate" dataPeriod="1000" data-rotate='["Software Engineer", "Web Developer", "Foodie"]'><span className='wrap'>{text}</span></span></h1>
                        <p>I'm a recent graduate of Duke University and currently a software engineer living in New York City.</p>
                        <a href="#project" style={{textDecoration: 'none'}}>                    
                            <button>View Projects <ArrowRightCircle size={25}/></button>
                        </a>
                        </div>}
                    </TrackVisibility>
                </Col>

                <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img src={ProfileImage} alt='profile'></img>
                    </div>}
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner