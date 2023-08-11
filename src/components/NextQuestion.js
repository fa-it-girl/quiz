import React from 'react'

const NextQuestion = ({dispatch, answer, index, numQuestions}) => {
  if(answer=== null) return null
  if ( index < numQuestions-1) return (
    <button className='btn btn-ui' onClick={()=>(dispatch({type: 'nextQuestion'}))}>
     Next
    </button>
  )
  if ( index === numQuestions-1) return (
    <button className='btn btn-ui' onClick={()=>(dispatch({type: 'finisTest'}))}>
     Finish
    </button>
  )



}

export default NextQuestion
