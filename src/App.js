import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import StartQuiz from "./components/StartQuiz";
import Question from "./components/Question";
import NextQuestion from "./components/NextQuestion";
import Progress from "./components/Progress";


const initialState = {
  questions: [],
  //status can be === 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  index: 0,
  answer: null,
  points: 0
}

const reducer = (state, action) => {
   switch(action.type){
    case 'dataRecived':
      return {
        ...state,
        questions: action.payload,
        status: "ready"
      }
      case 'dataFailed':
        return {
        ...state,
        status: 'error'
      }
      case 'start':
        return {
          ...state,
          status: 'active'
        }


      case 'newAnswer':
        const question = state.questions.at(state.index)
        return {
          ...state,
          answer: action.payload,
          points: action.payload === question.correctOption
          ? state.points + question.points
          : state.points}
      case 'nextQuestion':
        return {
          ...state,
          index: state.index + 1,
          answer: null
        }

      default:
        throw new Error ('unknown')
   }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const numQuestions = state.questions.length;
  const maxPoints = state.questions.reduce((prev, cur)=> prev + cur.points, 0)
  const questions = state.questions
  const index = state.index
  const answer = state.answer
  const points = state.points

  useEffect(function(){
      fetch('http://localhost:8000/questions')
        .then((response) => response.json())
        .then((data) => dispatch({type: 'dataRecived', payload: data}))
      .catch((error) => dispatch({type: "dataFailed"}))
  }, [])
  return (
    <>
      <Header />
      <Main>
        {state.status === 'loading' && <p>loading questions</p>}
        {state.status === 'error' && <p>error</p>}
        {state.status === 'ready' && <StartQuiz numQuestions={numQuestions} dispatch={dispatch}/>}
        {state.status === 'active' &&
        <>
        <Progress numQuestions={numQuestions} index={index} points={points} maxPoints={maxPoints}/>
        <Question question={questions[index]} dispatch={dispatch} answer={answer}/> <NextQuestion dispatch={dispatch} answer={answer}/>
        </>}
      </Main>

    </>

  );
}


export default App;
