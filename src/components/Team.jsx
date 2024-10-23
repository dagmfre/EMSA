import ScTeam from "./committees/ScTeam";

export default function Team() {
  return (
    <div id="executives" className="team" style={{ padding: "5rem 2rem 2rem" }}>
      <h1 data-aos-once="true" data-aos="zoom-in">
        Meet Our <span>Dedicated Team</span>
      </h1>
      <p>
        Officials and executives who play vital role for the success of EMSA
      </p>
      <div>
        <ScTeam standingCommittee={"Officials"} />
      </div>
    </div>
  );
}
