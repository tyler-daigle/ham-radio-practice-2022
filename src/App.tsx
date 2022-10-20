import "./App.css";
import MainContainer from "./components/UI/MainContainer";
import ExamHeader from "./components/UI/ExamHeader";
import SmallText from "./components/UI/SmallText";
import QuestionList from "./components/QuestionList";
import Button from "./components/UI/Button";

const data = [
  {
    id: "T1A01",
    correct: 2,
    question:
      "Which of the following is a purpose of the Amateur Radio Service as stated in the FCC rules and regulations?",
    answers: [
      "Providing personal radio communications for as many citizens as possible",
      "Providing communications for international non-profit organizations",
      "Advancing skills in the technical and communication phases of the radio art",
      "All of these choices are correct",
    ],
  },
  {
    id: "T1A04",
    correct: 0,
    question:
      "How many operator/primary station license grants may be held by any one person?",
    answers: [
      "One",
      "No more than two",
      "One for each band on which the person plans to operate",
      "One for each permanent station location from which the person plans to operate",
    ],
  },
  {
    id: "T1B10",
    correct: 3,
    question:
      "Which of the following HF bands have frequencies available to the Technician class operator for RTTY and data transmissions?",
    answers: [
      "10 meter, 12 meter, 17 meter, and 40 meter bands",
      "10 meter, 15 meter, 40 meter, and 80 meter bands",
      "30 meter band only",
      "10 meter band only",
    ],
  },
];

function App() {
  return (
    <MainContainer>
      <main>
        <ExamHeader>Technician Practice Exam AB1234</ExamHeader>
        <SmallText>
          You must achieve a score of at least 76% in order to pass.
        </SmallText>
        <QuestionList questions={data} />
        <Button>Technician</Button>
      </main>
    </MainContainer>
  );
}

export default App;
