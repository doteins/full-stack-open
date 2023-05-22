// Header component
const Header = (props) => {
  const { course } = props
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

// Part component to be rendered inside the Content component
const Part = (props) => {
  const { parts } = props;
  console.log("From Part component", parts);
  return (
    <>
      {parts.map((part, index) => (
        <p key={index}>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  );
};


// Content component
const Content = (props) => {
  const { parts } = props
  console.log("Parts from Content component",parts);
  return (
    <>
      {/* <Part name={parts[0].name} exercise={parts[0].exercises} />
      <Part name={parts[1].name} exercise={parts[1].exercises} />
      <Part name={parts[2].name} exercise={parts[2].exercises} /> */}
      <Part parts={parts} />
    </>
  );
};

// Total component
const Total = ({parts}) => {
  console.log("From total ",parts);
  const total = parts.reduce((accumulator, part) => accumulator + part.exercises, 0)
  console.log(total);
  return (
    <>
      <p><strong>Number of exercises {total}</strong></p>
    </>
  );
};

const Course = ({course}) => {
  const { name, parts } = course
  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default Course