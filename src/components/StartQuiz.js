import React from 'react'

const StartQuiz = ({numQuestions, dispatch}) => {
  return (
    <div  className="start">
      <h2 >Welcome to the Quiz</h2>
      <h3>{numQuestions} questions to test your knowledge</h3>
        <button className='btn btn-start' onClick={()=>{dispatch({type: "start"})}}>Lets start</button>
    </div>
  )
}

export default StartQuiz;
