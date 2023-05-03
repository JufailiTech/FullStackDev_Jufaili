const PersonForm = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        <label htmlFor="name">Name: </label><input id="name" value={newName} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="number">Number: </label><input id="number" value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">Add Name</button>
      </div>
    </form>
  );
};

export default PersonForm;
