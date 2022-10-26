import api from "../Assets/images/api.svg";
import collaboration from "../Assets/images/collaboration.svg";
import css from "../Assets/images/css.svg";
import d3 from "../Assets/images/d3.svg";
import debugging from "../Assets/images/debugging.svg";
import figma from "../Assets/images/figma.svg";
import github from "../Assets/images/github.svg";
import html from "../Assets/images/html.svg";
import javascript from "../Assets/images/javascript.svg";
import jira from "../Assets/images/jira.svg";
import jquery from "../Assets/images/jquery.svg";
import leadership from "../Assets/images/leadership.svg";
import materialui from "../Assets/images/materialui.svg";
import native from "../Assets/images/native.svg";
import next from "../Assets/images/next.svg";
import react from "../Assets/images/react.svg";
import sourcetree from "../Assets/images/sourcetree.svg";
import testing from "../Assets/images/testing.svg";
import uxUI from "../Assets/images/ux-ui.svg";
import vsCode from "../Assets/images/vscode.svg";
import wordpress from "../Assets/images/wordpress.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../Assets/images/arrow1.svg";
import arrow2 from "../Assets/images/arrow2.svg";
import colorSharp from "../Assets/images/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>The languages that I have knowledge of and the skills that I possess are as follows:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="html" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="css" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="JS" />
                                <h5>JavaScript (ES6)</h5>
                            </div>
                            <div className="item">
                                <img src={jquery} alt="Jquery" />
                                <h5>JQuery</h5>
                            </div>
                            <div className="item">
                                <img src={d3} alt="D3" />
                                <h5>D3</h5>
                            </div>
                            <div className="item">
                                <img src={materialui} alt="MaterialUI" />
                                <h5>MaterialUI</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={native} alt="React Native" />
                                <h5>React Native</h5>
                            </div>
                            <div className="item">
                                <img src={next} alt="Next.js" />
                                <h5>Next.js</h5>
                            </div>
                            <div className="item">
                                <img src={vsCode} alt="VS Code" />
                                <h5>Visual Studio Code</h5>
                            </div>
                            <div className="item">
                                <img src={jira} alt="Jira" />
                                <h5>Jira</h5>
                            </div>
                            <div className="item">
                                <img src={figma} alt="Figma" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={api} alt="Api" />
                                <h5>API integration</h5>
                            </div>
                            <div className="item">
                                <img src={wordpress} alt="Wordpress" />
                                <h5>Wordpress</h5>
                            </div>
                            <div className="item">
                                <img src={uxUI} alt="Ux/Ui" />
                                <h5>UX/UI Design</h5>
                            </div>
                            <div className="item">
                                <img src={sourcetree} alt="Sourcetree" />
                                <h5>Sourcetree</h5>
                            </div>
                            <div className="item">
                                <img src={github} alt="Github" />
                                <h5>Github</h5>
                            </div>
                            <div className="item">
                                <img src={debugging} alt="Debugging" />
                                <h5>Debugging Knowledge</h5>
                            </div>
                            <div className="item">
                                <img src={testing} alt="Testing" />
                                <h5>Testing</h5>
                            </div>
                            <div className="item">
                                <img src={leadership} alt="Leadership" />
                                <h5>Leadership</h5>
                            </div>
                            <div className="item">
                                <img src={collaboration} alt="Collaboration" />
                                <h5>Collaboration</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}