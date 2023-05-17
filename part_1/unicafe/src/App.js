import { useState } from "react";

// Header component
const Header = ({ header }) => {
  return (
    <div>
      <h2>{header}</h2>
    </div>
  );
};

// Button component
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

// Display counter element
const ResultLine = ({ text, counter }) => (
  <div>
    {text} {counter}
  </div>
);

// Results component
const Results = ({ good, neutral, bad, total }) => {
  // Average of good and bad votes
  const avg = total ? (good - bad) / total : 0;
  // Calculate the % of positive votes
  const percentage = total ? (good / total) * 100 : 0;
  // Conditional rendering
  if (total === 0) {
    return (
      <div>
        <p>Nothing to see here yet</p>
      </div>
    );
  } else {
    return (
      <div>
        <ResultLine text={"Good"} counter={good} />
        <ResultLine text={"Neutral"} counter={neutral} />
        <ResultLine text={"Bad"} counter={bad} />
        <ResultLine text={"All"} counter={total} />
        <ResultLine text={"Average"} counter={avg} />
        <ResultLine text={"Percentage"} counter={`${percentage}%`} />
      </div>
    );
  }
};

const App = () => {
  // Headers
  const firstHeader = "Give feedback below:";
  const secondHeader = "Results:";

  // Save all clicks
  const [total, setTotal] = useState(0);

  // Save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Set click events
  const increaseGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const increaseNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const increaseBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <Header header={firstHeader} />
      <Button handleClick={increaseGood} text={"Good"} />
      <Button handleClick={increaseNeutral} text={"Neutral"} />
      <Button handleClick={increaseBad} text={"Bad"} />

      <Header header={secondHeader} />
      <Results good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
