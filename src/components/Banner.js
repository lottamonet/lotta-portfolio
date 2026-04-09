import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../Assets/images/header-img.PNG";
import avatar from "../Assets/images/avatar.png";
import { ConnectBtn } from "./ConnectBtn";
import "animate.css";
import TrackVisibility from "react-on-screen";

const toRotate = ["Frontend Engineer", "React Developer", "JavaScript Problem Solver", "Builder of clean, User-Focused Apps"];
const period = 2000;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(500);
    }
  }, [text, isDeleting, loopNum]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">
                    Hi, I'm Lotta
                    <img src={avatar} alt="Avatar Img" className="avatar" />
                  </span>
                  <h1>
                    {`Frontend Engineer building clean, user-focused web experiences`}
                    <br />
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                  I'm Carlotta Monet Island, but you can call me Lotta. I'm a Bay Area-based frontend engineer focused on building responsive, intuitive applications using React and modern JavaScript. I enjoy turning ideas into real, working products and continuously improving performance, usability, and user experience.
                  </p>
                  <a href="#connect" className="connect-btn">
                    <ConnectBtn />
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" className="header-img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};