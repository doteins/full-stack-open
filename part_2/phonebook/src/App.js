import { useState } from 'react'

const Header = ({text}) => {
  return (
    <>
      <h2>{text}</h2>
    </>
  )
}

const Person = ({ persons }) => {
  console.log("From person component ",persons);
  return (
    <>
      {
        persons.map(person => {
          return <li key={person.name}>{person.name} {person.number}</li>
        })
      }
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-1234567"}
  ])

  // Set new person name
  const [newName, setNewName] = useState('')

  // Set new person's number
  const [newNumber, setNewNumber] = useState('')

  // Handle button click event
  const addContact = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const personObject = {
      name: newName,
      number: newNumber
    }

    // Some method checks wheter person name already exists in array or not (true || false)
    const nameInArray = persons.some(person => person.name === personObject.name)

    if (nameInArray) {
      alert(`${newName} is already listed on your phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName("")
      setNewNumber("")
    }
  }

  // Event handler to add new person name
  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  // Event handler to add new number
  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <Header text={"Phonebook"}/>
      <form onSubmit={addContact}>
        <div>Name: <input value={newName} onChange={handleNewName}/></div>
        <div>Number: <input value={newNumber} onChange={handleNewNumber}/></div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <Header text={"Numbers"}/>
      <ul>
        <Person persons={persons} />
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App