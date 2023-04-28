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
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {sum}</p>
        <p>Average: {avg}</p>
        <p>Positive: {positive} %</p>
      </>
    );
  }
};

export default Statistics;
