import './App.css';
import { questions } from './data/questionsData.json'
import Question from './components/Question'

const App = () => {

  const mappedQuestions = questions.map(question => {
    return(
      <Question 
        key={question.number} 
        questionNumber={question.number}
        title={question.title}
        questionText={question.questionText}
      />
    )
  })

  return (
    <div className="App">
      App
      {mappedQuestions}
    </div>
  );
}

export default App;
