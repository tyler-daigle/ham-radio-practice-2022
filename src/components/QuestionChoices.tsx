export default function QuestionChoices({ choices }) {
  return (
    <ol
      style={{
        paddingLeft: "3rem",
        margin: "1rem 0",
      }}
    >
      {choices.map((choice) => (
        <li>{choice}</li>
      ))}
    </ol>
  );
}
