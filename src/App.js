import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import StartQuiz from "./components/StartQuiz";


const initialState = {
  questions: [],
  //status can be === 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading'
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

      default:
        throw new Error ('unknown')
   }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const numQuestions = state.questions.length;

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
        {state.status === 'ready' && <StartQuiz numQuestions={numQuestions}/>}
      </Main>

    </>

  );
}


export default App;
