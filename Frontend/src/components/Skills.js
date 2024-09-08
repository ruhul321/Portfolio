import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>

              <p>
                ● <strong>Front-End Technologies</strong>: HTML, CSS,
                JavaScript, TypeScript, JQuery, React, UI/UX, TailwindCSS,
                Bootstrap <br />● <strong>Back-End Technologies</strong>:
                Node.js, Java, JSP, SQL, REST APIs, JWT{" "}
                {"                                              "}
                <br />●<strong>Frameworks & Libraries</strong>: Express,
                Next.js, Redux ,React Query, Mongoose, Helmet.js <br />●
                <strong>Databases</strong>: MongoDB , MySQL <br />●{" "}
                <strong>Tools & Plateforms</strong>: Git, Github, SOAP UI,
                Postman,Supabase, Docker, Kubernetes
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Front-End Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Back-End Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>APIs Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Full Stack Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
