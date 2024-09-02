import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/the-wild-oasis.png";
import projImg2 from "../assets/img/natours.png";
import projImg3 from "../assets/img/forkify.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "The Wild Oasis",
      description: "Hotel Management Application",
      imgUrl: projImg1,
      Livelink: "https://the-wild-oasis-website-lovat.vercel.app/",
      sourceCodeLink: "https://github.com/ruhul321/the-wild-oasis",
    },
    {
      title: "Natours",
      description: "Tour Booking Application",
      imgUrl: projImg2,
      Livelink: "https://natours-9lvk.onrender.com/",
      sourceCodeLink: "https://github.com/ruhul321/natours",
    },
    {
      title: "Forkify",
      description: "Recipe Application",
      imgUrl: projImg3,
      Livelink: "https://forkify-ruhul.netlify.app/",
      sourceCodeLink: "https://github.com/ruhul321/Forkify-Recipe-App",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    {/* Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. */}
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    ></Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p></p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p></p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
