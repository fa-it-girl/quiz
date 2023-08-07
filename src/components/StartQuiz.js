import React from 'react'

const StartQuiz = ({numQuestions}) => {
  return (
    <div>
      <h2>Welcome to the Quiz</h2>
      <p>{numQuestions} questions to test your knowledge</p>
      <button>Lets start</button>
    </div>
  )
}

export default StartQuiz;
