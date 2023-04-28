import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content p1={parts[0].name} ex1={parts[0].exercises} p2={parts[1].name} ex2={parts[1].exercises} p3={parts[2].name} ex3={parts[2].exercises} />
      <Total ex1={parts[0].exercises} ex2={parts[1].exercises} ex3={parts[2].exercises} />
    </div>
  )
}

export default App;
