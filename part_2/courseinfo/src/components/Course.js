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
  // console.log(props);
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
  // console.log(props);
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
  const { parts } = props
  console.log(parts);
  const total =
    parts[0].exercises +
    parts[1].exercises +
    parts[2].exercises;


  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};

const Course = ({course}) => {

  // console.log(course.parts);

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default Course