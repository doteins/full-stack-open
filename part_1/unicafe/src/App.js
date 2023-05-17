import { useState } from 'react'

// Header component
const Header = ({header}) => {
  return (
    <div>
      <h2>{header}</h2>
    </div>
  );
};

// Counter element
const Display = ({text, counter}) => <div>{text} {counter}</div>

// Button component
const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  // Headers
  const firstHeader = "Give feedback below:"
  const secondHeader = "Results:"
  
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Set click events
  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Header header={firstHeader} />
      <Button handleClick={increaseGood} text={'Good'} />
      <Button handleClick={increaseNeutral} text={'Neutral'} />
      <Button handleClick={increaseBad} text={'Bad'} />

      <Header header={secondHeader} />
      <Display text={'Good'} counter={good} />
      <Display text={'Neutral'} counter={neutral} />
      <Display text={'Bad'} counter={bad} />
    </div>
  )
}

export default App;
