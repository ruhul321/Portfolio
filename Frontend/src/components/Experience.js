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
                    Software Engineer | H&M Services Private Limited, Bangalore
                  </h3>
                  <p>(Dec 2025 - Present)</p>
                </div>
                <ul>
                  <li>
                    Designed and developed an internal broadcasting platform
                    enabling stakeholders to publish and manage clothing content
                    across multiple business domains, improving content delivery
                    efficiency by ~40%.
                  </li>
                  <li>
                    Refactored and optimized API integration with a global
                    common clothing data service, reducing API response latency
                    by ~35% and improving data throughput under high
                    concurrency.
                  </li>
                  <li>
                    Translated Jira user stories into scalable technical
                    solutions, delivering features within Agile sprint cycles
                    with minimal regression defects.
                  </li>
                </ul>
                <div className="job-title">
                  <h3>
                    Full Stack Developer | Firstsource Solution Limited,
                    Bangalore
                  </h3>
                  <p>(Jan 2025 - Dec 2025)</p>
                </div>
                <ul>
                  <li>
                    Developed Agentic AI Solution, a portal leveraging AI/LLMs
                    to dynamically generate UI components from Excel
                    configuration files.
                  </li>
                  <li>
                    Implemented a low-code/no-code UI generation system,
                    reducing manual UI development time by 60%.
                  </li>
                  <li>
                    Enhanced authentication and authorization via Keycloak
                    (OAuth2, JWT, SSO), ensuring secure multi-tenant access
                    control.
                  </li>
                  <li>
                    Built and maintained backend microservices using Node.js,
                    Express, and MongoDB, optimizing scalability and
                    performance.
                  </li>
                  <li>
                    Deployed components on Azure, incorporating CI/CD pipelines
                    for automated testing and deployment.
                  </li>
                </ul>
                <div className="job-title">
                  <h3>
                    Full Stack Developer | Tata Consultancy Services, Bangalore
                  </h3>
                  <p>(Dec 2021 - Jan 2025)</p>
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
                    Implemented authentication and authorization mechanisms
                    using JWT, enhancing application security and reducing
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
