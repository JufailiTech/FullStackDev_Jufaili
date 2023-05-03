import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchString, setSearchString] = useState("");

  const checkExists = (person, personsArray) => {
    let found = false;
    personsArray.forEach((p) => {
      if (p.name === person.name) found = true;
    });

    return found;
  };

  const addPerson = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    if (!checkExists(newPerson, persons)) {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} is already added to the phone book!`);
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilteration = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <label htmlFor="filter">Filter displayed names with </label>
        <input id="filter" onChange={handleFilteration} type="text" />
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add Name</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter((p) =>
          p.name.toLowerCase().includes(searchString.toLocaleLowerCase())
        )
        .map((p) => (
          <p key={p.id}>
            {p.name}: {p.number}
          </p>
        ))}
    </div>
  );
};

export default App;
