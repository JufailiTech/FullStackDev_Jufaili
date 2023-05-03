import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const checkExists = (person, personsArray) => {
    let found = false;
    personsArray.forEach((p) => {
      if (JSON.stringify(p) === JSON.stringify(person)) {
        console.log(p, person);
        found = true;
      }
    });

    return found;
  };

  const addPerson = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
    };

    console.log(checkExists(newPerson, persons));

    if (!checkExists(newPerson, persons)) {
      setPersons(persons.concat(newPerson));
      setNewName("");
    } else {
      alert(`${newName} is already added to the phone book!`);
    }
  };

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">Add Name</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
