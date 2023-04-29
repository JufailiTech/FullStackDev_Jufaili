import { useState } from "react";
import Statistics from './Statistics'
import Button from "./Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Please Provide your Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} label="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} label="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} label="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
