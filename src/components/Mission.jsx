export default function Mission() {
  return (
    <div className="mission">
      <div className="mission-topic">
        <div>
          <h1>
            Our <span>Mission</span>
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetuer.</p>
        </div>

        <img src="ethio_med.png" alt=""></img>
      </div>
      <div className="mission-cont">
        <div className="missions">
          <div className="mission-emoji">
            <img src="empower2.png" alt="" />
          </div>
          <div className="mission-main">
            <h1>Empowerment</h1>
            <p>
              Become a platform for the personal and professional growth and
              development of medical students all over Ethiopia by providing
              opportunities to expand their horizons and work on solutions for
              problems we are facing regarding health care and medical
              education. <br />
              <br />
              Enhance the interest and participation of medical students in the
              fields of public health, research and other parallel ventures.
            </p>
          </div>
        </div>
        <div className="missions">
          <div className="mission-emoji">
            <i class="fa-solid fa-lightbulb"></i>
          </div>
          <div className="mission-main">
            <h1>Development</h1>
            <p>
              Creating an environment in which medical students are
              well-equipped with all the necessary knowledge and skills so that
              they may be influential in the betterment of the healthcare system
              both locally and glob
            </p>
          </div>
        </div>
        <div className="missions">
          <div className="mission-emoji">
            <img src="connect2.png" alt="" />
          </div>
          <div className="mission-main">
            <h1>Unity</h1>
            <p>
              Connect, support and stand for medical students all over Ethiopia
              in their journey of acquiring medical knowledge and develop their
              all rounded skills and become a platform for them to serve the
              community and achieve their goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
