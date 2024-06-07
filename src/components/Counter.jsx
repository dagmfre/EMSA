import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = ({ end }) => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div className="counter">
      <div className="stats">
        <h1 ref={ref3}>
          {inView3 ? <CountUp end={1000} duration={2.75} suffix="+" /> : "0"}
        </h1>
        <div>
          <i class="fa-solid fa-droplet"></i>
          <h2>Blood Donation Events</h2>
        </div>
      </div>
      <div className="interceptor"></div>
      <div className="stats">
        <h1 ref={ref2}>
          {inView2 ? <CountUp end={500} duration={2.75} suffix="+" /> : "0"}
        </h1>
        <div>
          <i className="fa-solid fa-user-group"></i>
          <h2>Employees</h2>
        </div>
      </div>
      <div className="interceptor"></div>
      <div className="stats">
        <h1 ref={ref1}>{inView1 ? <CountUp end={9} duration={7} /> : "0"}</h1>
        <div>
          <i class="fa-solid fa-users"></i>
          <h2>Local Chapters</h2>
        </div>
      </div>
    </div>
  );
};

export default Counter;
