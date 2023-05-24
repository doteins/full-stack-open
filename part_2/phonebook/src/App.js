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
          return <li key={person.name}>{person.name}</li>
        })
      }
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  // Handle button click event
  const addContact = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const personObject = {
      name: newName
    }

    // Some method checks wheter person name already exists in array or not (true || false)
    const personInArray = persons.some(person => person.name === personObject.name)

    if (personInArray) {
      alert(`${newName} is already listed on your phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName("")
    }
  }

  // Handle event handler to change update phonebook
  const handleContactChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <Header text={"Phonebook"}/>
      <form onSubmit={addContact}>
        <div>
          Name: <input value={newName} onChange={handleContactChange}/>
        </div>
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