import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import HomePage from './components/homepage';
import QuizPage from './components/quiz';
import MakeRound from './components/makeRound';
import QuizOverview from './components/quizOverview';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


function App() {
  
  const[quiz, setQuiz] = useState({
    quiz_id : 1, //to accesss quiz to play
    maker_id: 1, //to access quiz to edit and mark responses
    num_rounds : 1,
    quiz : []
    }
  )

  return (
    <Router>
        <Route exact 
          path='/' 
          render={() => {
            return(
              <HomePage quiz={quiz} setQuiz={setQuiz} />
            )
          }}
        />
        <Route exact path='/quiz' component={withRouter(QuizPage)} />
        <Route exact 
          path='/quizOverview' 
          render={() => {
            return(
            <QuizOverview quiz={quiz} setQuiz={setQuiz} />)
          }}
        />
        <Route exact 
          path='/makeRound'
          render={() => {
            return(
            <MakeRound quiz={quiz} setQiz={setQuiz} />)
          }}
        />
    </Router>
  );
}

export default App;
