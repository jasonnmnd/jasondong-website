import { Container, Row, Col } from "react-bootstrap";
import Logo from '../assets/logo.png'
import Nav1 from '../assets/nav-icon1.svg'
import Nav2 from '../assets/nav-icon2.svg'
import Nav3 from '../assets/nav-icon3.svg'

function Footer() {
    return (
        <footer className="footer">
          <Container>
            <Row className="align-items-center">
              <Col size={8} sm={4}>
                <img src={Logo} alt="Logo" />
              </Col>
              <Col size={12} sm={8} className="text-center text-sm-end">
                <div className="social-icon" style={{paddingTop: '20px'}}>
                    <a href='https://www.linkedin.com/in/jason-dong-7075a5177/' target="_blank" rel="noopener noreferrer"><img src={Nav1} alt="LinkedIn"></img></a>
                    <a href='https://github.com/jasonnmnd' target="_blank" rel="noopener noreferrer"><img src={Nav2} alt="GitHub"></img></a>
                    <a href='https://www.instagram.com/jasonnmnd/' target="_blank" rel="noopener noreferrer"><img src={Nav3} alt="Instagram"></img></a>
                </div>
                <p>Copyright 2022. All Rights Reserved</p>
              </Col>
            </Row>
          </Container>
        </footer>
      )
}

export default Footer