import React from 'react'

const Progress = ({index, numQuestions, points, maxPoints}) => {
  return (
    <header className='progress'>
      <progress value={index} max={numQuestions}/>
     <p>Questions : {index + 1}/{numQuestions}</p>

      <p>{points}/{maxPoints}</p>
   </header>


  )
}

export default Progress
