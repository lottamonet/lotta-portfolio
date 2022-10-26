import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../Assets/images/header-img.PNG";
import avatar from "../Assets/images/avatar.png";
import { ConnectBtn } from "./ConnectBtn";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer", "Mother", "Fitness Lover" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
   console.log(index);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio<img src={avatar} alt="Avatar Img" className="avatar"/></span>
                <h1>{`Hi! I'm Lotta and I'm a...`}<br/> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "Mother", "Fitness Lover" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm Carlotta Monet Island, but you can call me Lotta. It's a pleasure to meet you and I would love for you to get to know me a little more. I am a Bay Area native that has experienced living in multiple cities such as Chicago and Las Vegas. I have two beautiful daugters who mean the world to me. Some of my passions include dancing, music, fitness, and, last but certainly not least, learning. I love researching, and teaching myself new things. I love the art of creating something out of nothing and the learning curve that comes along with that process. Now that you know a bit about me, feel free to learn more about my skills and projects!</p>
                  <a href='#connect' className="connect-btn">
                    <ConnectBtn />
                  </a>  
                 
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" className="header-img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}