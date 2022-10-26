import { Container, Row, Col, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { MailchimpForm } from "./MailchimpForm";
import CarlottaLogo from "../Assets/images/CarlottaLogo.png";
import navIcon1 from "../Assets/images/nav-icon-1.svg";
import navIcon2 from "../Assets/images/nav-icon-2.svg";
import navIcon3 from "../Assets/images/nav-icon-3.svg";

export const Footer = () => {
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
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="footer-menu">
            <img src={CarlottaLogo} alt="Carlotta's Logo" className="nav-logo"/>
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('home')} >About Me</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('projects')} >Projects</Nav.Link>
              <Nav.Link href="#connect" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('contact')} >Contact</Nav.Link>
            </Nav>
          </Col>
          
            
         
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}