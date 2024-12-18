import React from "react";

const Education = () => {
  return (
    <>
      <section className="education" id="education">
        <h2 className="heading">
          My <span>Journey</span>{" "}
        </h2>

        <div className="education-row">
          <div className="education-column">
            <h3 className="title">Education</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i>2020-2023
                  </div>
                  <h3>B.Sc(Computer Science)</h3>
                  <p>
                    I graduated from Sri Ramakrishna College of Arts and Science
                    with a CGPA of 7.5 and a First Class.
                  </p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i>2019-2020
                  </div>
                  <h3>Higher Secondary Leaving Certificate</h3>
                  <p>
                    I received a 65.4% in my HSLC at CSI Boys Hr. Sec. School.
                  </p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i>2017-2018
                  </div>
                  <h3>Secondary School Leaving Certificate</h3>
                  <p>I received 78.2% in my SLC at CSI Boys Hr. Sec. School.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="education-column">
            <h3 className="title">Certification</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bx-certification"></i>Full-Stack
                  </div>
                  <h3>MERN Stack Development Course</h3>
                  <p>Edureka Learning Center – Completed in 2024</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bx-certification"></i>ReactJS
                  </div>
                  <h3>ReactJS Course</h3>
                  <p>Guvi – Completed in 2024</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bx-certification"></i>Advanced JavaScript
                  </div>
                  <h3>Advanced JavaScript Course</h3>
                  <p>Guvi – Completed in 2024</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bx-certification"></i>CSS
                  </div>
                  <h3>CSS Bootcamp - Master CSS</h3>
                  <p>offered by Hackup Technology Pvt. Ltd, Coimbatore </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
