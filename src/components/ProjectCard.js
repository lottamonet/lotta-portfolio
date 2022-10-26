import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4} id="card-col">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className="project-description">{description}<br/>{link ? <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">View Live Site!</a> : <span className="project-link">Site is not yet live!</span>}</span>
        </div>
      </div>
    </Col>
  )
}