const Filter = ({handleFilter}) => {
  return (
    <div>
      <label htmlFor="filter">Filter displayed names with </label>
      <input id="filter" onChange={handleFilter} type="text" />
    </div>
  );
};

export default Filter;
