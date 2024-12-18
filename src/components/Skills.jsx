import React from "react";

const Skills = () => {
  return (
    <>
      <section className="skills" id="skills">
        <h2 className="heading">
          My <span>Skills</span>
        </h2>
        <div className="skills-row">
          <div className="skills-column">
            <h3 className="title">Coding Skills</h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>
                    HTML<span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    CSS<span>75%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    JavaScript<span>70%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    NodeJS<span>60%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    MongoDB<span>60%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    ReactJS<span>65%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills-column">
            <h3 className="title">Tools</h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>
                    Git<span>70%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Github<span>70%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Excel<span>30%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Canva<span>10%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
