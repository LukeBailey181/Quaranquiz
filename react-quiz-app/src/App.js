import React from 'react';
import logo from './logo.svg';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import HomePage from './components/homepage';
import QuizPage from './components/quiz';
import MakeQuiz from './components/makeQuiz';

function App() {
  return (
    <Router>
        <Route exact path='/' component={HomePage} />
        <Route path='/quiz' component={QuizPage} />
        <Route path='/makeQuiz' component={MakeQuiz} />
    </Router>
  );
}

export default App;
