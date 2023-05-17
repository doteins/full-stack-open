import { useState } from "react";

// Header component
const Header = ({ header }) => {
  return (
    <div>
      <h2>{header}</h2>
    </div>
  );
};

// Display counter element
const Display = ({ text, counter }) => (
  <div>
    {text} {counter}
  </div>
);

// Button component
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
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

  // Average of good and bad votes
const average = (val1, val2, val3) => {
  if (parseInt(val3) === 0) {
    return 0
  }
  const result = ((val1 - val2) / val3)
  return result
}

// Positive votes % calculation
const percentage = (counter, totalCounter) => {
  if (totalCounter === 0) {
    return 0
  }
  const result = (counter / totalCounter) * 100
  return `${result} %`
};

  return (
    <div>
      <Header header={firstHeader} />
      <Button handleClick={increaseGood} text={"Good"} />
      <Button handleClick={increaseNeutral} text={"Neutral"} />
      <Button handleClick={increaseBad} text={"Bad"} />

      <Header header={secondHeader} />
      <Display text={"Good"} counter={good} />
      <Display text={"Neutral"} counter={neutral} />
      <Display text={"Bad"} counter={bad} />
      <Display text={"All"} counter={total} />
      <Display text={"Average"} counter={average(good,bad,total)} />
      <Display text={"Percentage"} counter={percentage(good,total)} />
      
    </div>
  );
};

export default App;
