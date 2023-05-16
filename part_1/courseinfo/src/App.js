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
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  );
};

// Content component
const Content = (props) => {
  return (
    <>
      {/* <p>
        {props.part1} {props.exercise1}
      </p>
      <p>
        {props.part2} {props.exercise2}
      </p>
      <p>
        {props.part3} {props.exercise3}
      </p> */}
      <Part part={props.part1} exercise={props.exercise1} />
      <Part part={props.part2} exercise={props.exercises2} />
      <Part part={props.part3} exercise={props.exercises3} />
    </>
  );
};

// Total component
const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  );
};

// App component
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercise1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
