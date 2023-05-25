import { useState } from "react";

const Header = ({ text }) => {
  return (
    <>
      <h2>{text}</h2>
    </>
  );
};

const Persons = ({ foundPerson }) => {
  console.log("From person component ", foundPerson);
  return (
    <>
      {foundPerson.map((person) => {
        return (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        );
      })}
    </>
  );
};

// Search input component
const SearchInput = ({value, onChange}) => {
  return (
    <div>
      Filter by <input value={value} onChange={onChange} placeholder="name" />
    </div>
  )
}

const App = () => {
  //  Dummy data in array
  const dummyData = [
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ];

  // State variables
  const [persons, setPersons] = useState(dummyData);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchText, setSearchText] = useState("");

  // // Event handlers
  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchText(event.target.value);
  };

  const addContact = (event) => {
    event.preventDefault();

    // Create a new person object using the values from the input fields
    const personObject = {
      name: newName,
      number: newNumber,
    };

    // Check if the person's name already exists in the persons array
    const nameInArray = persons.some(
      (person) => person.name === personObject.name
    );

    
    if (nameInArray) {
      alert(`${newName} is already listed on your phonebook`);
    } else {  // If the name doesn't exist, add the person to the persons array
      setPersons(persons.concat(personObject));

      // Reset the input field values to empty strings
      setNewName("");
      setNewNumber("");
    }
  };

  // Filter the persons based on the search text
  const foundPerson = searchText
    ? persons.filter(
        (person) =>
          person.name.toLocaleLowerCase().startsWith(searchText.toLocaleLowerCase())
      )
    : persons;

  

  return (
    <div>
      <Header text={"Phonebook"} />
      <SearchInput value={searchText} onChange={handleSearch} />
      <Header text={"Add a new contact"} />
      <form onSubmit={addContact}>
        <div>
          <input
            type="text"
            value={newName}
            onChange={handleNewName}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="text"
            value={newNumber}
            onChange={handleNewNumber}
            placeholder="Phone number"
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <Header text={"Numbers"} />
      <ul>
        <Persons foundPerson={foundPerson}/>
      </ul>
      {/* <div>debug: {newName}</div> */}
    </div>
  );
};

export default App;
