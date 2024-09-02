import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  Livelink,
  sourceCodeLink,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a
            href={Livelink}
            className="live-button"
            target="_blank"
            rel="no noreferrer"
          >
            Live
          </a>
        </div>
      </div>
    </Col>
  );
};
