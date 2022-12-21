import './Play.css';

import BarChart from '../../components/BarChart/BarChart';

const Play = () => {
  return (
    <div className="play">
      <BarChart />
      <section className="buttons">
        <button className="up">
          <i className="uil uil-arrow-growth"></i>
        </button>
        <button className="down">
          <i className="uil uil-chart-down"></i>
        </button>
      </section>
    </div>
  );
};

export default Play;
