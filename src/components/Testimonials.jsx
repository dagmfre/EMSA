export default function Testimonials() {
  return (
    <div id="testimonial" className="testimonial">
      <div className="testim-topic">
        <h1>What people say about us</h1>
        <img className="sparkle-img" src="sparkle.svg" alt="" />
      </div>
      <div className="testim-cont">
        <div data-aos-once="true" data-aos="fade-right" data-aos-duration="1200">
          <div className="testim">
            <div className="testim-descr-cont">
              <i className="fa-solid fa-quote-right"></i>

              <p>
                “EMSA has been an absolute lifesaver for our medical
                association. As a small organization, we struggled to keep up
                with the demands of running our website and managing our
                members.”
              </p>
            </div>
            <div className="photo-cont">
              <div className="photo1"></div>

              <div>
                <p className="name">Samrawit Fikru</p>
                <p className="profess">CEO Rule</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos-once="true" data-aos="fade-right" data-aos-duration="1800">
          <div className="testim">
            <div className="testim-descr-cont">
              <i className="fa-solid fa-quote-right"></i>

              <p>
                “I’ve been a member of several medical associations over the
                years, and I have to say that EMSA is by far the best. I highly
                recommend EMSA to any medical professional looking to join a
                reputable association.”
              </p>
            </div>
            <div className="photo-cont">
              <div className="photo2"></div>

              <div>
                <p className="name">Nael Hailemariam</p>
                <p className="profess">CEO Chapa</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos-once="true" data-aos="fade-right" data-aos-duration="2200">
          <div className="testim">
            <div className="testim-descr-cont">
              <i className="fa-solid fa-quote-right"></i>

              <p>
                “EMSA has been a game-changer for our medical association. The
                team at EMSA is always available to help us with any issues we
                have, and they are truly committed to helping us succeed. We are
                grateful for everything EMSA has done for us.” pen_spark
              </p>
            </div>
            <div className="photo-cont">
              <div className="photo3"></div>

              <div>
                <p className="name">Bersufekad Getachew</p>
                <p className="profess">CEO ChuziGo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}