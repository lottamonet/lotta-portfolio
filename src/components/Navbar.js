import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarlottaLogo from '../Assets/images/CarlottaLogo.png'; 
import navIcon1 from '../Assets/images/nav-icon-1.svg';
import navIcon2 from '../Assets/images/nav-icon-2.svg';
import navIcon3 from '../Assets/images/nav-icon-3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";



export function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const w = window.innerWidth;
    const h = window.innerHeight;

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
   
      const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      } 


  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
              <img src={CarlottaLogo} alt="Logo" className="nav-logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
              
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('home')} >About Me</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('projects')} >Projects</Nav.Link>
              <Nav.Link href="#connect" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('contact')} >Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                  <a href="https://www.linkedin.com/in/lottamonet" target="_blank" rel="noreferrer noopener"><img src={navIcon1} alt="linkedin" /></a>
                  <a href="https://www.github.com/lottamonet" target="_blank" rel="noreferrer noopener"><img src={navIcon2} alt="github" /></a>
                  <a href="https://drive.google.com/file/d/1mob-EfAQnHIup-wjouQoLrGjCq7kJrZs/view?usp=sharing" target="_blank" rel="noreferrer noopener"><img src={navIcon3} alt="resume" /></a>
              </div>
                <HashLink to='#connect'>
                  <button className="vvd"><span>Let’s Connect</span></button>
                </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>  
  );
}



