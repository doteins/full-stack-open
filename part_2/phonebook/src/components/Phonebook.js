export const Header = ({ text }) => {
  return (
    <>
      <h2>{text}</h2>
    </>
  );
};

export const Persons = ({ foundPerson }) => {
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
export const SearchInput = ({ searchText, handleSearch }) => {
  return (
    <div>
      Filter by{" "}
      <input value={searchText} onChange={handleSearch} placeholder="name" />
    </div>
  );
};

// Form component
export const Form = ({
  addContact,
  newName,
  handleNewName,
  newNumber,
  handleNewNumber,
}) => {
  return (
    <>
    <form onSubmit={addContact}>
      <div>
        <input
          type="text"
          value={newName}
          onChange={handleNewName}
          placeholder="Name"
          required
        />
      </div>
      <div>
        <input
          type="tel"
          value={newNumber}
          onChange={handleNewNumber}
          placeholder="Phone number"
          required
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  </>
  )
};