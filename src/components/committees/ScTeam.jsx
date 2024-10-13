import teamData from "./teamData";

export default function ScTeam({ standingCommittee }) {
  return (
    <div className="team">
      <div>
        <h1 data-aos-once="true" data-aos="zoom-in">
          Meet Our <span>Officials of {standingCommittee}</span>
        </h1>
        <div className="team-img-cont">
          {teamData?.[standingCommittee]?.map((member, index) => (
            <div
              key={index}
              data-aos-once="true"
              data-aos="zoom-in"
              data-aos-duration="700"
              className="team-img-wrapper t1-wrapper"
            >
              <img src={member?.imgSrc} alt="" className="team-img" />
              <div className="profile">
                <div className="profile-descrp">
                  <h4>{member?.name}</h4>
                  <p>{member?.title}</p>
                </div>
                <div>
                  <a href={`tel:${member?.phone}`}>
                    <i className="fa-solid fa-phone-volume"></i>
                  </a>
                  <a href={`mailto:${member?.email}`}>
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
