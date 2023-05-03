import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "999999999" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((p) => (
        <p key={p.name}>
          {p.name}: {p.number}
        </p>
      ))}
    </div>
  );
};

export default App;
