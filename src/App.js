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
      <div className='project-description-wrapper'>
        <h1> Eric's Project Euler </h1>
        <p> This is an ongoing project that I add to as I make progress.  All the logic is built into the JS file and the buttons simply display the answers generated. </p>
        <p> This site is NOT an answer guide.  It is only to demonstrate my personal logic and problem solving skills. </p>
        <p> Please note that some of the answers may take some time to generate.  According to Project Euler, if an answer takes less than 60 seconds, it is considered optimized and a passing solution. Therefore if an answer takes a little time to load, it is not a delay in the site, but rather the logic taking time to complete the complex calculations which runs in real time on button click.</p>
        <p>You can view the full challenges <a href='https://projecteuler.net/' target='_blank' rel='noreferrer'> HERE </a> </p>
      </div>
        
      {mappedQuestions}
    </div>
  );
}

export default App;
