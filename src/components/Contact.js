import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../Assets/images/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
 
  const status = {};
  const [sendEmailMsg, setSendEmailMsg] = useState(false);

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_boxwu5h', 'template_79w38x8', form.current, 'ogXbClN55YoP3eteQ')
      .then((result) => {
          console.log(result);
          result.text === 'OK' ? setSendEmailMsg(true) : setSendEmailMsg(false);
      }, (error) => {
          console.log(error.text);
         
      });
      setFormDetails({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
      
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} name="user_first_name" placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} name="user_last_name"placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} name="user_email" placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} name="user_phone" placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} name="message"  placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit" className="form-btn"><span>Send</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
                {sendEmailMsg === true ? <p>Your message has been sent successfully. Thank you for connecting!</p> : null }
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}