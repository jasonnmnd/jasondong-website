import React, { useEffect, useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import ProfileImage from '../assets/profile-img.png'

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

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-top'>
                <Col xs={12} md={6} xl={7}>
                    {/* <span className='tagline'>Welcome to my website</span> */}
                    <h1>{`Hi I'm Jason, a `}<span className='wrap'>{text}</span></h1>
                    <p>I'm a recent graduate of Duke University and currently working as a software engineer living in New York City.</p>
                    <button onClick={() => console.log("HI")}>Let's Connect <ArrowRightCircle size={25}/></button>
                </Col>

                <Col xs={12} md={6} xl={5}>
                    <img src={ProfileImage} alt='profile'></img>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner