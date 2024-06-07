import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Team() {
  return (
    <div className="team">
      <div>
        <h1 data-aos-once="true" data-aos="zoom-in">
          Meet Our <span>Dedicated Team</span>
        </h1>
        <p>
          Officials and trainers who play vital role for the success of EMSA
        </p>
        <div class="team-img-cont">
          <div
            data-aos-once="true"
            data-aos="zoom-in"
            data-aos-duration="700"
            class="team-img-wrapper t1-wrapper"
          >
            <img
              src="https://i0.wp.com/www.sergiogarciaheadshots.com/wp-content/uploads/2023/11/professional-headshots-011.jpg"
              alt=""
              class="team-img"
            />
            <div className="profile">
              <div className="profile-descrp">
                <h4>Hewan Dereje</h4>
                <p>Vice President for (VPPRC)</p>
              </div>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
          <div
            data-aos-once="true"
            data-aos="zoom-in"
            data-aos-duration="1100"
            class="team-img-wrapper t2-wrapper"
          >
            <img
              src="https://www.danielmottaphotography.com/blog/wp-content/uploads/2022/12/the-importance-of-a-professional-headshot-for-job-hunters-scaled.jpg"
              alt=""
              class="team-img"
            />
            <div className="profile">
              <div className="profile-descrp">
                <h4>Hewan Dereje</h4>
                <p>Vice President for (VPPRC)</p>
              </div>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
          <div
            data-aos-once="true"
            data-aos="zoom-in"
            data-aos-duration="1500"
            class="team-img-wrapper t3-wrapper"
          >
            <img
              src="https://www.retratosbarcelona.com/wp-content/uploads/2023/10/retratos-barcelona-professional-portrait-kiren-shunmugham.jpg"
              alt=""
              class="team-img"
            />
            <div className="profile">
              <div className="profile-descrp">
                <h4>Hewan Dereje</h4>
                <p>Vice President for (VPPRC)</p>
              </div>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
          <div
            data-aos-once="true"
            data-aos="zoom-in"
            data-aos-duration="1900"
            class="team-img-wrapper t4-wrapper"
          >
            <img
              src="https://t3.ftcdn.net/jpg/05/83/41/98/360_F_583419866_97XPxjHDJkQ2RKMmGWdgrbqJhEZeQb55.jpg"
              alt=""
              class="team-img"
            />
          </div>
          <div
            data-aos-once="true"
            data-aos="zoom-in"
            data-aos-duration="2300"
            class="team-img-wrapper t5-wrapper"
          >
            <img
              src="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg"
              alt=""
              class="team-img"
            />
            <div className="profile">
              <div className="profile-descrp">
                <h4>Hewan Dereje</h4>
                <p>Vice President for (VPPRC)</p>
              </div>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
          <div
            data-aos-once="true"
            data-aos="zoom-in"
            data-aos-duration="2700"
            class="team-img-wrapper t6-wrapper"
          >
            <img
              src="https://i.pinimg.com/736x/d6/2e/0c/d62e0c8234e158d8a4c142532d41bb17.jpg"
              alt=""
              class="team-img"
            />
            <div className="profile">
              <div className="profile-descrp">
                <h4>Hewan Dereje</h4>
                <p>Vice President for (VPPRC)</p>
              </div>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
          <div
            data-aos-once="true"
            data-aos="zoom-in"
            data-aos-duration="2700"
            class="team-img-wrapper t7-wrapper"
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/55b029d3e4b022c52efdde18/1589819677890-UWSD6DH5IHAHU67A70PI/toledo+professional+headshots-2.jpg"
              alt=""
              class="team-img"
            />
            <div className="profile">
              <div className="profile-descrp">
                <h4>Hewan Dereje</h4>
                <p>Vice President for (VPPRC)</p>
              </div>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
          <div class="trainers-pool-link">
            <div>
              {" "}
              <h2>Explore Trainers Profile</h2>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
