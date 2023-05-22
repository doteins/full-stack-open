// Header component
const Header = (props) => {
  const { course } = props
  return (
    <>
      <h2>{course}</h2>
    </>
  );
};

// Part component to be rendered inside the Content component
const Part = (props) => {
  const { parts } = props;
  console.log("From Part component", parts);
  return (
    <>
      {parts.map((part) => (
        <p key={part.id}>
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
      <h1>Web Development Curriculum</h1>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default Course