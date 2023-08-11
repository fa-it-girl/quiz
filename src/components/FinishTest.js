import React from 'react'

const FinishTest = ({numQuestions, points, highScore, maxPoints, dispatch}) => {
  return (
    <>
     <p className='result'>
      You scored {points} out of {maxPoints} points ({numQuestions }questions).
     </p>

     <p className='highscore'>
      Highscore: {highScore}
     </p>


    <button className='btn btn-ui' onClick={() => (dispatch({type: 'reStart' }))}>Start again</button>
    </>

  )
}

export default FinishTest
