import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo.png'
import Nav1 from '../assets/nav-icon1.svg'
import Nav2 from '../assets/nav-icon2.svg'
import Nav3 from '../assets/nav-icon3.svg'


function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled = true;
        } else {
            setScrolled = false;
        }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const openEmail = () => {
    window.open('mailto:jasondong7777@gmail.com')
  }
  return (
    <div>
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
            {/* <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link> */}
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/jason-dong-7075a5177/' target="_blank" rel="noopener noreferrer"><img src={Nav1} alt="LinkedIn"></img></a>
                <a href='https://github.com/jasonnmnd' target="_blank" rel="noopener noreferrer"><img src={Nav2} alt="GitHub"></img></a>
                <a href='https://www.instagram.com/jasonnmnd/' target="_blank" rel="noopener noreferrer"><img src={Nav3} alt="Instagram"></img></a>
            </div>
            <button className='vvd' onClick={() => openEmail()}>Email Me</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar