const Persons = ({ persons, searchString }) => {
  return (
    <>
      {persons
        .filter((p) =>
          p.name.toLowerCase().includes(searchString.toLocaleLowerCase())
        )
        .map((p) => (
          <p key={p.id}>
            {p.name}: {p.number}
          </p>
        ))}
    </>
  );
};

export default Persons;
