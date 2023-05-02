const Header = ({ name }) => <h1>{name}</h1>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part part={part} />
      ))}
    </>
  );
};

const Course = ({ course }) => (
  <>
    <Header name={course.name} />
    <Content parts={course.parts} />
  </>
);

export default Course;
