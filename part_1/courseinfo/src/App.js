// Header component
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

// Part component to be rendered inside the Content component
const Part = (props) => {
  console.log(props);
  return (
    <>
      <p>
        {props.name} {props.exercise}
      </p>
    </>
  );
};

// Content component
const Content = (props) => {
  console.log(props);
  return (
    <>
      <Part name={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercise={props.parts[2].exercises} />
    </>
  );
};

// Total component
const Total = (props) => {
  console.log(props);
  const total =
    props.total[0].exercises +
    props.total[1].exercises +
    props.total[2].exercises;
    
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};

// App component
const App = () => {
  const course = "Half Stack application development";

  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts} />
    </div>
  );
};

export default App;
