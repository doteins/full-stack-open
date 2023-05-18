import { useState } from 'react'

// Header component
const Header = ({ header }) => {
  return (
    <div>
      <h2>{header}</h2>
    </div>
  );
};

const Anecdote = ({ anecdote }) => <p>{anecdote}</p>

// Button component
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const ResultVotes = ({ votes }) => {
  return (
    <div>
      <p>This anecdote has {votes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  // Anecdote state
  const [selected, setSelected] = useState(0)

  // Get random number passing a maximum
  const randomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  // Votes of anecdote state
  const arrOfVotes = new Array(anecdotes.length)
  const [votes, setVotes] = useState(arrOfVotes.fill(0))

  // New state require to show the anecdote with most votes
  const [winnerVotes, setWinnerVotes] = useState(0);

  // Handler event to update state of newVotes array
  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)

    if (votes[winnerVotes] < newVotes[selected]) {
      setWinnerVotes(selected)
    }
  }


  return (
    <div>
      <Header header={"Anecdote of the day"} />
      <Anecdote anecdote={anecdotes[selected]} />
      <ResultVotes votes={votes[selected]} />
      <Button handleClick={handleVote} text={`Vote ${votes[selected]}`} />
      <Button handleClick={randomAnecdote} text={"Next anecdote!"} />

      <Header header={"Anecdote with most votes"} />
      <Anecdote anecdote={anecdotes[winnerVotes]} />
      <ResultVotes votes={votes[winnerVotes]} />
    </div>
  )
}

export default App