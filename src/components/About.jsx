import React from "react";

const About = () => {
  return (
    <>
      {/* about section  */}
      <section className="section" id="section">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <div className="about-img">
          <img src="/images/gokul2.jpg" alt="picture" />
          <span className="circle-spin"></span>
        </div>

        <div className="about-content">
          <h3>Frontend Developer!</h3>
          <p>
            I thrive on the dynamic intersection of design and technology, where
            user interfaces come to life. My goal is to create seamless,
            responsive, and delightful web applications that not only meet but
            exceed user expectations. My journey into the world of web
            development started with a curious exploration of HTML and CSS
            during my college days. What began as a hobby quickly transformed
            into a full-fledged passion as I delved into the intricacies of
            front-end development. Today, I find immense joy in bringing design
            concepts to life through code
          </p>
        </div>
        <div className="btn-box btns">
          <a href="" className="aboutusreadmore">
            Read More
          </a>
        </div>
      </section>
      {/* End of about section  */}
    </>
  );
};

export default About;
