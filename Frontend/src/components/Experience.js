import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Experience = () => {
  return (
    <section
      className="skill"
      id="experience"
      style={{ paddingBottom: "116px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <div className="experience-section">
                <h2>Experience</h2>
                <div className="job-title">
                  <h3>
                    Full Stack Developer | Tata Consultancy Services, Bangalore
                  </h3>
                  <p>(Dec 2021 - Present)</p>
                </div>
                <ul>
                  <li>
                    Collaborated with senior developers to design and implement
                    5 new features, increasing user retention by 10%.
                  </li>
                  <li>
                    Redesigned a RESTful API using Node.js and Express, handling
                    500+ requests per second with minimal latency.
                  </li>
                  <li>
                    Revamped a responsive user interface using React and
                    TailwindCSS, achieving a 95% mobile-friendliness score on
                    Google Lighthouse and enhancing user engagement through
                    intuitive design.
                  </li>
                  <li>
                    Conducted thorough testing and debugging, reducing bug
                    reports by 25%, and implemented automated unit tests using
                    Jest, achieving 90% code coverage.
                  </li>
                  <li>
                    Developed and integrated MongoDB database schema, optimizing
                    queries to reduce data retrieval time by 30% and ensuring
                    seamless interaction between the backend and the React
                    frontend.
                  </li>
                  <li>
                    Implemented authentication and authorization mechanismsusing
                    JWT, enhancing application security and reducing
                    unauthorized access attempts by 15%.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
