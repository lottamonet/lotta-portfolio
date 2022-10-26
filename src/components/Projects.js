import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ecommerce from "../Assets/images/ecommerce.jpg";
import blackandpurple from "../Assets/images/blackandpurple.jpg";
import froyo from "../Assets/images/froyo.jpg";
import marvel from "../Assets/images/marvel.jpg";
import movie from "../Assets/images/movies.jpg";
import onboarding from "../Assets/images/onboarding.jpg";
import plumb from "../Assets/images/plumb.png";
import goalapp from "../Assets/images/goalapp.jpg";
import numbergame from "../Assets/images/numbergame.jpg";
import colorSharp2 from "../Assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';




export const Projects = () => {
  const webDevelopment = [
     {
      title: "Stanford Website-Center for Human Rights and International Justice",
      description: `Collaborated with project manager and technical lead to develop two custom web pages for the Stanford Website- Center for Human Rights and International Justice, using WordPress as a platform, incorporating advanced custom fields for dynamic content for the client. (Not yet live)`
,
       imgUrl: blackandpurple,
       alt: 'stanford'
    },
    {
      title: "E-Commerce Website",
      description: `I used Wordpress with elementor to create a custom theme for an e-commerce website template. The user is able to add featured items to their cart while their cart total auto-updates, which was a function accomplished by adding code to the PHP file.`,
      imgUrl: ecommerce,
      alt: 'ecommerce',
      link: 'https://lotta2.actest.club/'
    },
    {
      title: "Marvel",
      description: "This webpage was developed in virtual studio code using HTML, CSS, JQuery, and JavaScript. With the help of an API call from Marvel, the user is able to search for any marvel character in the marvel universe and if the data is available, a card will be returned with the character image, name, and description. If the user doesn’t know the correct spelling and they only know the first letter, the search will return all characters whose name start with that letter. At the bottom of the page lies a Thanos gauntlet hand, and if the user clicks the “Snap” button all of the returned characters will disappear.",
      imgUrl: marvel,
      alt: 'marvel',
      link: 'https://lottamonet.github.io/Marvel-API-Project/'
    },
    {
      title: "Froyo",
      description: "I developed a single webpage using HTML and CSS with a focus of utilizing flexbox and positioning skills.",
       imgUrl: froyo,
       alt: 'froyo',
       link: 'https://lottamonet.github.io/Lotta-Froyo-Root/'
    },
  ];


  const webAppDev = [
     {
      title: "Lighthouse Data Initiative",
      description: "I contributed over 1000 lines of code to the Lighthouse Data Initiative (Allies Against Slavery); developing, testing, and deploying three graphs, three tables, a choropleth map, and two map filters, using D3.js for the visuals and React as a platform. ",
       imgUrl: blackandpurple,
       alt: 'lighthouse',
       link: 'https://www.alliesagainstslavery.org/lighthouse'
    },
     {
      title: "Plumb App",
      description: "I developed a calendar functionality for the Plumb App, using React as a platform, by adding over 300 lines of code to the existing repository, giving users the capability to select a date range and filter for specific content within that range. I also developed a promotion code functionality within the checkout page allowing for customers to enter a promtion code and receiving the respective discount.",
       imgUrl: plumb,
       alt: 'plumb',
       link: 'https://plumbapp.com'
    },
    {
      title: "Engineer Onboarding",
      description: "This is a one page engineer onboarding web applications that is fully functional on the frontend. The user has the capability to click on each existing engineer card and review their profile. The user can also add an engineer to the list of engineer cards by clicking on the “Add Engineer” button. This then prompts a form to appear at the bottom of the page; the user can then complete the form and upon clicking the submit button, the profile is added to the list of profile cards, and then form then again disappears.",
       imgUrl: onboarding,
       alt: 'onboarding',
       link: 'https://lottamonet.github.io/engineer-onboarding/'
    },
     {
      title: "Movie App",
      description: "This is a two page movie react web application built using virtual studio code. on the “Your Movies” page, the user has the capability to search for a movie title which then prompts an API call to the Open Movie Database (OMDb), and the returns the available result(s) with a movie poster, movie title, plot summary, and the year released. The user is also able to click on the “Profile” page, which takes the user to that page. The user is able edit the profile by clicking on the “Edit Your Profile” button which then allows them to add or update a profile picture, update their personal information, and add or delete movies from their saved movies.",
       imgUrl: movie,
       alt: 'movie',
       link: 'https://aesthetic-dolphin-a8ee3f.netlify.app/'
    },
  ];

  const mobileDev = [
    {
      title: "Goal App",
      description: `A mobile Application developed for Ios and Android which allows the user to click the "Add Goal" button, which then prompts a modal to slide in. The user can then enter a goal into the modal text field and upon pushing submit, that goal will then be added to the list and the modal will disappear.` ,
       imgUrl: goalapp
    },
     {
      title: "Number Game",
      description: "A mobile Application developed for Ios and Android where the user tries to guess a specific number. In this game there are three screens total; a start game screen, game screen, and end game screen. On the start game screen the user enters a starting number. On the game screen the user is given directions to either guess higher or lower and is then given random numbers in the specified direction until the proper number is guessed. Once the right number is guessed, the end game screen comes up.",
       imgUrl: numbergame
    },
  ];
  

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are the different projects I have either developed or contributed to within the last year.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Webpage</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web App</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Mobile</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          webDevelopment.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          webAppDev.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          mobileDev.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}