import React from "react";

const Home = () => {
  return (
    <>
      {/* home page sectiion  */}
      <section className="home" id="home">
        <div className="home-content">
          <h1>
            Hi, I'm <span>Gokulakrishnan</span>
          </h1>
          <div className="animation-content">
            <h3>MERN stack Developer</h3>
          </div>
          <p>
            As a passionate front-end developer, I blend creativity with
            technical expertise to craft immersive and user-centric digital
            experiences. With a keen eye for design and a commitment to clean,
            efficient code, I transform ideas into visually stunning and
            functional websites.
          </p>
          <div className="btn-box">
            <a href="#">Hire Me</a>
            <a target="_blank" href="https://wa.me/918056421813">
              Let's Talk
            </a>
          </div>
        </div>
        <div className="soc-media">
          <a
            href="https://www.linkedin.com/feed/?trk=sem-ga_campid.14650114788_asid.150089839322_crid.656569072777_kw.www%20linkedin_d.c_tid.kwd-2246447582_n.g_mt.e_geo.1007809"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://wa.me/918056421813" target="_blank">
            <i className="bx bxl-whatsapp"></i>
          </a>
        </div>
        <div className="img-hover"></div>
      </section>
      {/* End of header section of home page  */}
    </>
  );
};

export default Home;
