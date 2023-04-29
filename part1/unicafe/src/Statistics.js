import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad;
  const avg = (good - bad) / (good + bad + neutral);
  const positive = ((good / (good + bad + neutral)) * 100).toFixed(13);

  if (sum === 0) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    );
  } else {
    return (
      <>
        <h2>Statistics</h2>
        <StatisticLine label="Good" value={good} />
        <StatisticLine label="Neutral" value={neutral} />
        <StatisticLine label="Bad" value={bad} />
        <StatisticLine label="All" value={sum} />
        <StatisticLine label="Average" value={avg} />
        <StatisticLine label="Positive" value={positive + " %"} />
      </>
    );
  }
};

export default Statistics;
