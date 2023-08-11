import React from 'react'

const StartQuiz = ({numQuestions, dispatch}) => {
  return (
    <div>
      <h2>Welcome to the Quiz</h2>
      <p>{numQuestions} questions to test your knowledge</p>
      <button onClick={()=>{dispatch({type: "start"})}}>Lets start</button>
    </div>
  )
}

export default StartQuiz;
